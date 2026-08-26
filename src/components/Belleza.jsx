// Ejemplo para src/components/Belleza.jsx
import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Belleza() {
  const listaBelleza = productos.filter((item) => item.categoria === 'belleza');

  return (
    <div className="inicio-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">Belleza y Cuidado</h2>
      <div className="productos-grid">
        {listaBelleza.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Belleza;