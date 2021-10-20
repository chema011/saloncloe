import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import './css/index.css';
import { ThemeProvider } from 'styled-components';

//Componentes
import App from './App';
import * as theme from './config/theme';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
