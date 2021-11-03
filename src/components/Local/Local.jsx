import React from 'react';

//Estilos
import * as Styled from './Local.style';

//Animaciones
import Fade from 'react-reveal/Fade';

//Datos
import { titulo, local, direccion } from './LocalData';

const Local = () => {
  console.log(local);
  return (
    <Styled.Box id="local">
      <Fade top>
        <h2>{titulo}</h2>
      </Fade>
      <Fade bottom>
        <img src={local} alt="Salon De Fiestas Cloe" />
        <p>{direccion}</p>
      </Fade>
    </Styled.Box>
  );
};

export default Local;
