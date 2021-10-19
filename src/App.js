import React, { useState } from 'react';

// Componentes
import Nav from './components/Nav/Nav.jsx';
import Popup from './components/Popup/Popup.jsx';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Estilos
import './css/app.css';
import Header from './components/Header/Header.jsx';

const App = () => {
  const [popup, setpopup] = useState('');
  return (
      <Router>
        {/* Menu */}
        <Nav popup={setpopup}/>
        {popup ? <Popup popup={setpopup}/> : null}

        <div className="container">
        {/* Header */}
        <Header />

        {/* Popup */}
        </div>
      </Router>
  );
};

export default App;
