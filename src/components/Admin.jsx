import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [editandoId, setEditandoId] = useState(null);

  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [precioPen, setPrecioPen] = useState('');
  const [categoria, setCategoria] = useState('tecnologia');
  const [destacado, setDestacado] = useState(false);
  const [enOferta, setEnOferta] = useState(false);
  const [imagen, setImagen] = useState('');
  const [linkAfiliado, setLinkAfiliado] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const CLAVE_ADMIN = "123";

  const obtenerProductos = async () => {
    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .order('id', { ascending: false });

    if (error) console.error("Error al cargar:", error.message);
    else setListaProductos(data || []);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === CLAVE_ADMIN) {
      setAutenticado(true);
      obtenerProductos();
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const limpiarFormulario = () => {
    setEditandoId(null);
    setTitulo('');
    setPrecio('');
    setPrecioPen('');
    setCategoria('tecnologia');
    setDestacado(false);
    setEnOferta(false);
    setImagen('');
    setLinkAfiliado('');
    setDescripcion('');
  };

  const cargarParaEditar = (prod) => {
    setEditandoId(prod.id);
    setTitulo(prod.titulo);
    setPrecio(prod.precio);
    setPrecioPen(prod.precioPen || '');
    setCategoria(prod.categoria);
    setDestacado(Boolean(prod.destacado));
    setEnOferta(Boolean(prod.enOferta));
    setImagen(prod.imagen);
    setLinkAfiliado(prod.linkAfiliado);
    setDescripcion(prod.descripcion || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const payload = {
      titulo,
      precio: precio.startsWith('$') ? precio : `$${precio}`,
      precioPen: precioPen ? (precioPen.startsWith('S/') ? precioPen : `S/ ${precioPen}`) : '',
      categoria,
      destacado,
      enOferta,
      imagen,
      linkAfiliado,
      descripcion
    };

    if (editandoId) {
      const { error } = await supabase.from('productos').update(payload).eq('id', editandoId);
      if (error) alert("Error: " + error.message);
      else alert("¡Producto actualizado globalmente!");
    } else {
      const { error } = await supabase.from('productos').insert([payload]);
      if (error) alert("Error: " + error.message);
      else alert("¡Producto publicado para todos!");
    }

    setCargando(false);
    limpiarFormulario();
    obtenerProductos();
  };

  const handleEliminar = async (id, prodTitulo) => {
    if (!window.confirm(`¿Eliminar "${prodTitulo}" de la web?`)) return;
    const { error } = await supabase.from('productos').delete().eq('id', id);
    if (error) alert("Error: " + error.message);
    else obtenerProductos();
  };

  if (!autenticado) {
    return (
      <div style={{ maxWidth: '360px', margin: '80px auto', padding: '24px', backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #222', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>Admin ZEV</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="password" 
            placeholder="Contraseña"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{ padding: '10px', background: '#121212', border: '1px solid #333', borderRadius: '6px', color: '#fff' }}
            required
          />
          <button type="submit" style={{ padding: '10px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Ingresar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '680px', margin: '30px auto', padding: '24px', backgroundColor: '#0a0a0a', borderRadius: '12px', border: editandoId ? '1px solid #3b82f6' : '1px solid #222', color: '#fff' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #1f1f1f', paddingBottom: '12px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: editandoId ? '#3b82f6' : '#fff' }}>
          {editandoId ? '✏️ Editando Producto' : 'Panel de Control Global ZEV'}
        </h2>
        <button onClick={() => setAutenticado(false)} style={{ padding: '6px 12px', background: 'none', border: '1px solid #333', color: '#888', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>
          Salir
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input 
          type="text" placeholder="Título del producto" value={titulo} onChange={(e) => setTitulo(e.target.value)} required 
          style={{ padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
        />

        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" placeholder="Precio USD (Ej: 24.99)" value={precio} onChange={(e) => setPrecio(e.target.value)} required 
            style={{ flex: 1, padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
          />

          <input 
            type="text" placeholder="Precio PEN (Ej: 94.90)" value={precioPen} onChange={(e) => setPrecioPen(e.target.value)} 
            style={{ flex: 1, padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
          />

          <select 
            value={categoria} onChange={(e) => setCategoria(e.target.value)}
            style={{ flex: 1, padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
          >
            <option value="tecnologia">Tecnología</option>
            <option value="hogar">Hogar</option>
            <option value="belleza">Belleza</option>
            <option value="moda">Moda</option>
            <option value="deportes">Deportes</option>
          </select>
        </div>

        <input 
          type="url" placeholder="URL de la Imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required 
          style={{ padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
        />

        <input 
          type="url" placeholder="Link de Afiliado Amazon" value={linkAfiliado} onChange={(e) => setLinkAfiliado(e.target.value)} required 
          style={{ padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff' }}
        />

        <textarea 
          placeholder="Descripción del producto..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="3"
          style={{ padding: '10px', background: '#121212', border: '1px solid #262626', borderRadius: '6px', color: '#fff', resize: 'vertical' }}
        />

        <div style={{ display: 'flex', gap: '20px', padding: '4px 0' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
            <input type="checkbox" checked={destacado} onChange={(e) => setDestacado(e.target.checked)} />
            Destacado (Inicio)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
            <input type="checkbox" checked={enOferta} onChange={(e) => setEnOferta(e.target.checked)} />
            En Oferta
          </label>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" disabled={cargando} style={{ flex: 1, padding: '10px', background: editandoId ? '#3b82f6' : '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            {cargando ? 'Guardando...' : (editandoId ? 'Actualizar Producto' : 'Publicar Producto')}
          </button>
          {editandoId && (
            <button type="button" onClick={limpiarFormulario} style={{ padding: '10px 16px', background: '#222', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '13px', color: '#888', borderBottom: '1px solid #1a1a1a', paddingBottom: '6px' }}>Productos en Servidor ({listaProductos.length})</h3>
        <div style={{ maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
          {listaProductos.map((prod) => (
            <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#121212', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1f1f1f' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={prod.imagen} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain', background: '#fff', borderRadius: '4px' }} />
                <div>
                  <span style={{ fontSize: '12px', display: 'block', fontWeight: 'bold' }}>{prod.titulo}</span>
                  <span style={{ fontSize: '10px', color: '#888' }}>{prod.categoria} • {prod.precio}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button onClick={() => cargarParaEditar(prod)} style={{ background: '#222', color: '#fff', border: '1px solid #333', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>Editar</button>
                <button onClick={() => handleEliminar(prod.id, prod.titulo)} style={{ background: '#3f1212', color: '#ff6b6b', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>Borrar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}