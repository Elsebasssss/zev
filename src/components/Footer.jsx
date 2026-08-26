import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-info">
          <img src={logo} alt="ZEV" style={{ height: '40px', marginBottom: '15px' }} />
          <p>Selección diaria de los mejores productos y ofertas con envío a Perú.</p>
        </div>

        <div className="footer-enlaces">
          <h4>Categorías</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tecnologia">Tecnología</Link></li>
            <li><Link to="/hogar">Hogar</Link></li>
            <li><Link to="/ofertas">Top Ofertas</Link></li>
          </ul>
        </div>

        <div className="footer-redes">
          <h4>Comunidad</h4>
          <div className="iconos-redes">
            {/* ENLACE REAL DE TIKTOK (Reemplaza @tu_usuario por el tuyo) */}
            {/* ENLACE REAL DE TIKTOK */}
            <a href="https://www.tiktok.com/@el_zev" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            </a>
            {/* Instagram lo quitamos por ahora para no dejar enlaces vacíos */}
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-copy">
        <p>En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
        
        <p style={{ marginTop: '8px' }}>
          <Link to="/politica-privacidad" style={{ color: '#888', textDecoration: 'underline', fontSize: '0.85rem' }}>
            Política de Privacidad
          </Link>
        </p>

        <p>&copy; {new Date().getFullYear()} ZEV. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;