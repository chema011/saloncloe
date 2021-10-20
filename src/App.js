// Componentes
import Nav from './components/Nav/Nav.jsx';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Estilos
import './css/app.css';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <div className="container">
      <Router>
        {/* Menu */}
        <Nav />

        {/* Header */}
        <Header />

        {/* Popup */}
      </Router>
    </div>
  );
};

export default App;
