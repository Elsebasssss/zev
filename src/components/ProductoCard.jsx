// src/components/ProductoCard.jsx
function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      <div className="producto-img-placeholder" style={{ padding: '0', backgroundColor: '#fff' }}>
        <img 
          src={producto.imagen} 
          alt={producto.titulo} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="producto-info">
        <h3>{producto.titulo}</h3>
        <p className="precio">{producto.precio}</p>
        <a 
          href={producto.linkAfiliado} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-comprar"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          Ver en Amazon ↗
        </a>
      </div>
    </div>
  );
}

export default ProductoCard;