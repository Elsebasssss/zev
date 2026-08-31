import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import ProductoCard from './ProductoCard';

function Inicio() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('destacado', true);

      if (!error) setProductos(data || []);
      setCargando(false);
    };

    obtenerProductos();
  }, []);

  return (
    <div className="inicio-container">
      <section className="hero-section">
        <h1 className="hero-title">Lo que viste en TikTok,<br />directo a tu casa.</h1>
        <p className="hero-subtitle">
          Encuentra aquí todos los hallazgos virales recomendados con envío seguro a Perú.
        </p>
      </section>

      <section className="productos-section">
        <h2 className="section-title">🔥 Hallazgos Destacados</h2>
        
        {cargando ? (
          <p style={{ textAlign: 'center', color: '#a1a1aa' }}>Cargando productos...</p>
        ) : productos.length > 0 ? (
          <div className="productos-grid">
            {productos.map((prod) => (
              <ProductoCard key={prod.id} producto={prod} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#a1a1aa' }}>No hay productos destacados por el momento.</p>
        )}
      </section>
    </div>
  );
}

export default Inicio;