// src/components/Ofertas.jsx
import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Ofertas() {
  const listaOfertas = productos.filter((item) => item.enOferta);

  return (
    <div className="inicio-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">⚡ Top Ofertas Virales</h2>
      
      <div className="productos-grid">
        {listaOfertas.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Ofertas;