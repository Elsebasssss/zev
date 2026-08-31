import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Filtrado from './components/Filtrado';
import Admin from './components/Admin';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import './App.css';

export default function App() {
  // 1. Obtener la sección inicial según la ruta actual de la URL
  const obtenerSeccionDeUrl = () => {
    const path = window.location.pathname.replace('/', '').toLowerCase();
    return path || 'inicio';
  };

  const [seccionActual, setSeccionActual] = useState(obtenerSeccionDeUrl);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Synchronize state with URL browser buttons (back/forward)
  useEffect(() => {
    const alCambiarUrl = () => {
      setSeccionActual(obtenerSeccionDeUrl());
    };
    window.addEventListener('popstate', alCambiarUrl);
    return () => window.removeEventListener('popstate', alCambiarUrl);
  }, []);

  // Handler para cambiar de sección y actualizar la URL en el navegador
  const cambiarSeccion = (nuevaSeccion) => {
    setSeccionActual(nuevaSeccion);
    const nuevaRuta = nuevaSeccion === 'inicio' ? '/' : `/${nuevaSeccion}`;
    window.history.pushState(null, '', nuevaRuta);
  };

  // Carga inicial centralizada de productos
  useEffect(() => {
    async function obtenerProductos() {
      const cacheGuardada = localStorage.getItem('zev_cache_productos');
      if (cacheGuardada) {
        setProductos(JSON.parse(cacheGuardada));
        setCargando(false);
      }

      const { data, error } = await supabase.from('productos').select('*');

      if (!error && data) {
        setProductos(data);
        localStorage.setItem('zev_cache_productos', JSON.stringify(data));
      }
      setCargando(false);
    }

    obtenerProductos();
  }, []);

  const recargarProductos = async () => {
    const { data } = await supabase.from('productos').select('*');
    if (data) {
      setProductos(data);
      localStorage.setItem('zev_cache_productos', JSON.stringify(data));
    }
  };

  return (
    <div className="contenedor-principal">
      <Header setSeccionActual={cambiarSeccion} seccionActual={seccionActual} />

      <main className="page">
        {seccionActual === 'inicio' ? (
          <Inicio setSeccionActual={cambiarSeccion} productos={productos} cargando={cargando} />
        ) : seccionActual === 'admin' ? (
          <Admin alCambiarProductos={recargarProductos} />
        ) : seccionActual === 'politica' ? (
          <PoliticaPrivacidad />
        ) : (
          <Filtrado 
            key={seccionActual} 
            categoriaInicial={seccionActual} 
            productos={productos} 
            cargando={cargando} 
          />
        )}
      </main>

      <Footer setSeccionActual={cambiarSeccion} />
    </div>
  );
}