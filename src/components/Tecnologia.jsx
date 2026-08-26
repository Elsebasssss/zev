// src/components/Tecnologia.jsx
import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Tecnologia() {
  // MAGIA: Filtramos la base de datos para que solo traiga tecnología
  const listaTecnologia = productos.filter((item) => item.categoria === 'tecnologia');

  return (
    <div className="inicio-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">Tecnología</h2>
      
      <div className="productos-grid">
        {/* Usamos nuestro molde y le pasamos los productos ya filtrados */}
        {listaTecnologia.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Tecnologia;