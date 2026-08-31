import React from 'react';
import ProductoCard from './ProductoCard';

function Inicio({ setSeccionActual, productos = [], cargando }) {
  // Filtrar en memoria solo los productos destacados
  const productosDestacados = productos.filter((p) => p.destacado === true);

  return (
    <div className="inicio-container">
      <section className="hero-section">
        <h1 className="hero-title">
          Lo que viste en TikTok,<br />directo a tu casa.
        </h1>
        <p className="hero-subtitle">
          Encuentra aquí todos los hallazgos virales recomendados con envío seguro a Perú.
        </p>
      </section>

      <section className="productos-section">
        <h2 className="section-title">🔥 Hallazgos Destacados</h2>
        
        {cargando && productos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#a1a1aa' }}>Cargando productos...</p>
        ) : productosDestacados.length > 0 ? (
          <div className="productos-grid">
            {productosDestacados.map((prod) => (
              <ProductoCard key={prod.id} producto={prod} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#a1a1aa' }}>
            No hay productos destacados por el momento.
          </p>
        )}
      </section>
    </div>
  );
}

export default Inicio;