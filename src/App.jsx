import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Tecnologia from './components/Tecnologia';
import Hogar from './components/Hogar';
import Belleza from './components/Belleza';
import Moda from './components/Moda';
import Deportes from './components/Deportes';
import Ofertas from './components/Ofertas';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import './App.css';

function App() {
  return (
    <div className="contenedor-principal">
      <Header />
      
      <main className="page">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/hogar" element={<Hogar />} />
          <Route path="/belleza" element={<Belleza />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;