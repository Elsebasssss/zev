import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="menu">
            <Link to="/" className="menu__brand">
                <img id="logo" src={logo} alt="ZEV" />
            </Link>

            <div className="menu__links">
                <Link to="/" className="menu__link">Inicio</Link>
                <Link to="/tecnologia" className="menu__link">Tecnología</Link>
                <Link to="/hogar" className="menu__link">Hogar</Link>
                <Link to="/belleza" className="menu__link">Belleza</Link>

                {/* Menú desplegable para Más Categorías */}
                <div className="menu-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
                    <button 
                        className="menu__link dropdown-btn"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Más Categorías ▾
                    </button>
                    
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="/moda" onClick={() => setDropdownOpen(false)}>Moda</Link>
                            <Link to="/deportes" onClick={() => setDropdownOpen(false)}>Deportes</Link>
                            <Link to="/ofertas" onClick={() => setDropdownOpen(false)}>Top Ofertas</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;