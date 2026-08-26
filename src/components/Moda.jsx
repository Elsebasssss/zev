// Ejemplo para src/components/Belleza.jsx
import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Moda() {
  const listaBelleza = productos.filter((item) => item.categoria === 'moda');

  return (
    <div className="inicio-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">Moda y Estilo</h2>
      <div className="productos-grid">
        {listaBelleza.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Moda;