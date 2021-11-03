import React from 'react';

///Estilos
import * as Styled from './Footer.style';

//Datos
import { descripcion, Img } from './FooterData';

//Componentes
import RedesSociales from '../RedesSociales/RedesSociales';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Box>
        <img src={Img.logo} alt={Img.alt} />
        <h1>{descripcion}</h1>
        <RedesSociales />
      </Styled.Box>
    </Styled.Footer>
  );
};

export default Footer;
