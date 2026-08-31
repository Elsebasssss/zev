import React from 'react';

function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      <div className="producto-img-placeholder">
        <img src={producto.imagen} alt={producto.titulo} />
      </div>

      <div className="producto-info">
        <h3>{producto.titulo}</h3>
        
        <p className="precio">
          {producto.precio}
          {producto.precioPen && (
            <span style={{ fontSize: '0.85rem', color: '#a1a1aa', marginLeft: '8px' }}>
              ({producto.precioPen})
            </span>
          )}
        </p>

        <a 
          href={producto.linkAfiliado || producto.link_afiliado} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-comprar"
        >
          Ver en Amazon
        </a>
      </div>
    </div>
  );
}

export default ProductoCard;