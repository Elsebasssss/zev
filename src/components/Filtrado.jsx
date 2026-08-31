import React from 'react';
import ProductoCard from './ProductoCard';

function Filtrado({ categoriaInicial, productos = [], cargando }) {
  // Filtrado instantáneo en memoria JavaScript
  const productosFiltrados = (categoriaInicial === 'todas' || categoriaInicial === 'ofertas')
    ? productos
    : productos.filter(
        (p) => p.categoria && p.categoria.toLowerCase() === categoriaInicial.toLowerCase()
      );

  return (
    <div className="inicio-container" style={{ paddingTop: '1rem' }}>
      <h2 className="section-title" style={{ textTransform: 'capitalize' }}>
        {categoriaInicial}
      </h2>

      {cargando && productos.length === 0 ? (
        <p style={{ color: '#a1a1aa' }}>Cargando productos...</p>
      ) : productosFiltrados.length === 0 ? (
        <p style={{ color: '#a1a1aa' }}>No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="productos-grid">
          {productosFiltrados.map((prod) => (
            <ProductoCard key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Filtrado;