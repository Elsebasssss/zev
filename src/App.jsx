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
  const [seccionActual, setSeccionActual] = useState('inicio');
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Carga inicial centralizada
  useEffect(() => {
    async function obtenerProductos() {
      // 1. Mostrar de inmediato los productos guardados en caché si existen
      const cacheGuardada = localStorage.getItem('zev_cache_productos');
      if (cacheGuardada) {
        setProductos(JSON.parse(cacheGuardada));
        setCargando(false);
      }

      // 2. Traer la versión actualizada de Supabase en segundo plano
      const { data, error } = await supabase.from('productos').select('*');

      if (!error && data) {
        setProductos(data);
        localStorage.setItem('zev_cache_productos', JSON.stringify(data));
      }
      setCargando(false);
    }

    obtenerProductos();
  }, []);

  // Función para forzar la recarga al agregar/eliminar desde Admin
  const recargarProductos = async () => {
    const { data } = await supabase.from('productos').select('*');
    if (data) {
      setProductos(data);
      localStorage.setItem('zev_cache_productos', JSON.stringify(data));
    }
  };

  return (
    <div className="contenedor-principal">
      <Header setSeccionActual={setSeccionActual} seccionActual={seccionActual} />

      <main className="page">
        {seccionActual === 'inicio' ? (
          <Inicio setSeccionActual={setSeccionActual} productos={productos} cargando={cargando} />
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

      <Footer setSeccionActual={setSeccionActual} />
    </div>
  );
}