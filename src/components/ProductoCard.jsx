import React, { useState } from 'react';

function ProductoCard({ producto }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = (e) => {
    e.stopPropagation();
    setModalAbierto(false);
  };

  return (
    <>
      {/* Tarjeta Principal en la Grilla */}
      <div 
        className="producto-card" 
        onClick={abrirModal}
        style={{ cursor: 'pointer' }}
      >
        <img src={producto.imagen} alt={producto.titulo} className="producto-imagen" />
        <div className="producto-info">
          <h3 className="producto-titulo">{producto.titulo}</h3>
          
          <div style={{ margin: '8px 0' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff' }}>
              {producto.precio}
            </span>
            {producto.precioPen && (
              <span style={{ fontSize: '0.85rem', color: '#888', marginLeft: '8px' }}>
                (~{producto.precioPen})
              </span>
            )}
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(producto.linkAfiliado, '_blank');
            }} 
            className="btn-comprar"
          >
            Ver en Amazon
          </button>
        </div>
      </div>

      {/* Modal / Tarjeta Flotante */}
      {modalAbierto && (
        <div 
          onClick={cerrarModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(4px)'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#121212',
              border: '1px solid #2a2a2a',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              color: '#fff'
            }}
          >
            {/* Botón de Cierre */}
            <button 
              onClick={cerrarModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#222',
                border: 'none',
                color: '#888',
                fontSize: '18px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            {/* Imagen del Producto */}
            <div style={{ textAlign: 'center', marginBottom: '20px', background: '#fff', padding: '12px', borderRadius: '12px' }}>
              <img 
                src={producto.imagen} 
                alt={producto.titulo} 
                style={{ maxHeight: '220px', objectFit: 'contain', maxWidth: '100%' }}
              />
            </div>

            {/* Categoría y Título */}
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>
              {producto.categoria}
            </span>
            <h2 style={{ fontSize: '1.25rem', margin: '6px 0 16px 0', lineHeight: '1.4' }}>
              {producto.titulo}
            </h2>

            {/* Precios USD y PEN */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px', background: '#1a1a1a', padding: '12px', borderRadius: '8px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>PRECIO AMAZON</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4ade80' }}>
                  {producto.precio}
                </span>
              </div>
              {producto.precioPen && (
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>ESTIMADO PERÚ</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#cbd5e1' }}>
                    {producto.precioPen}
                  </span>
                </div>
              )}
            </div>

            {/* Descripción */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#aaa', marginBottom: '6px', textTransform: 'uppercase' }}>
                Descripción del producto
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6' }}>
                {producto.descripcion || "Producto destacado de alta calidad disponible en Amazon con opciones de envío a Perú."}
              </p>
            </div>

            {/* Botón de Compra con Afiliado */}
            <a 
              href={producto.linkAfiliado} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '14px',
                backgroundColor: '#f59e0b',
                color: '#000',
                fontWeight: 'bold',
                textAlign: 'center',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Comprar en Amazon
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductoCard;