// Componentes
import Nav from './components/Nav/Nav.jsx';
import Map from './components/Map/Map.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Estilos
import './css/app.css';
import SliderImg from './components/Slider/SliderImg.jsx';
import Local from './components/Local/Local.jsx';

const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          {/* Menu */}
          <Nav />

          {/* Header */}
          <Header />

          {/* Carusel */}
          <SliderImg />

          {/*Local */}
          <Local />

          {/* Mapa */}
          <Map />
        </Router>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default App;
