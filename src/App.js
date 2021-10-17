import React from 'react';

// Componentes
import Nav from './components/Nav/Nav.jsx';
// import Popup from './components/Popup/Popup.jsx';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Animaciones

const App = () => {
  // const [popup, setpopup] = useState('');
  return (
    <Router>
      {/* Menu */}
      <Nav />

      {/* {popup ? <Popup popup={setpopup}/> : null} */}
      {/* Popup */}
    </Router>
  );
};

export default App;
