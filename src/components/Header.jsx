import React, { useState } from 'react';
import logo from '../imagenes/logo.png';

function Header({ setSeccionActual }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navegarA = (seccion) => {
    setSeccionActual(seccion);
    setDropdownOpen(false);
  };

  return (
    <nav className="menu">
      <div onClick={() => navegarA('inicio')} className="menu__brand" style={{ cursor: 'pointer' }}>
        <img id="logo" src={logo} alt="ZEV" />
      </div>

      <div className="menu__links">
        <button onClick={() => navegarA('inicio')} className="menu__link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}>
          Inicio
        </button>
        <button onClick={() => navegarA('tecnologia')} className="menu__link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}>
          Tecnología
        </button>
        <button onClick={() => navegarA('hogar')} className="menu__link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}>
          Hogar
        </button>
        <button onClick={() => navegarA('belleza')} className="menu__link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}>
          Belleza
        </button>

        {/* Menú desplegable para Más Categorías */}
        <div className="menu-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
          <button 
            className="menu__link dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
          >
            Más Categorías ▾
          </button>
          
          {dropdownOpen && (
            <div className="dropdown-content">
              <button onClick={() => navegarA('moda')} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', padding: '10px 16px', cursor: 'pointer', color: '#f1f1f1' }}>
                Moda
              </button>
              <button onClick={() => navegarA('deportes')} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', padding: '10px 16px', cursor: 'pointer', color: '#f1f1f1' }}>
                Deportes
              </button>
              <button onClick={() => navegarA('ofertas')} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', padding: '10px 16px', cursor: 'pointer', color: '#f1f1f1' }}>
                Top Ofertas
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;