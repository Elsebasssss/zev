import { productos } from '../data/productos';
import ProductoCard from './ProductoCard';

function Inicio() {
  // Filtra automáticamente todos los productos que tengan destacado: true
  const productosDestacados = productos.filter((p) => p.destacado);

  return (
    <div className="inicio-container">
      {/* GANCHO DE TIKTOK */}
      <section className="hero-section">
        <h1 className="hero-title">Lo que viste en TikTok,<br />directo a tu casa.</h1>
        <p className="hero-subtitle">
          Encuentra aquí todos los hallazgos virales recomendados con envío seguro a Perú.
        </p>
      </section>

      {/* CUADRÍCULA DE DESTACADOS */}
      <section className="productos-section">
        <h2 className="section-title">🔥 Hallazgos Destacados</h2>
        
        {productosDestacados.length > 0 ? (
          <div className="productos-grid">
            {productosDestacados.map((prod) => (
              <ProductoCard key={prod.id} producto={prod} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#a1a1aa' }}>No hay productos destacados por el momento.</p>
        )}
      </section>
    </div>
  );
}

export default Inicio;