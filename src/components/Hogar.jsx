// src/components/Hogar.jsx
import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Hogar() {
  // Filtramos la base de datos para la categoría hogar
  const listaHogar = productos.filter((item) => item.categoria === 'hogar');

  return (
    <div className="inicio-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">Hogar</h2>
      
      <div className="productos-grid">
        {listaHogar.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Hogar;