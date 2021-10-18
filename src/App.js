import React from 'react';

// Componentes
import Nav from './components/Nav/Nav.jsx';
// import Popup from './components/Popup/Popup.jsx';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Estilos
import './css/app.css';

const App = () => {
  // const [popup, setpopup] = useState('');
  return (
    <Router>
      {/* Menu */}
      <Nav />
      {/* {popup ? <Popup popup={setpopup}/> : null} */}
      <div id="home" className="Cajas"></div>

      <div id="novedades" className="Cajas ca2"></div>

      <div id="testimonios" className="Cajas ca2"></div>

      <div id="quienesSomos" className="Cajas ca2"></div>

      <div id="galeria" className="Cajas ca2"></div>

      <div id="contacto" className="Cajas ca2"></div>
      {/* Popup */}
    </Router>
  );
};

export default App;
