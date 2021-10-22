import React from 'react';

///Estilos
import * as Styled from './Footer.styled';

//Componentes
import RedesSociales from '../RedesSociales/RedesSociales';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Box>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nihil vero repellat molestias aliquam? Eius commodi quibusdam odit
          magni aperiam esse earum voluptatum dolor aut totam? Officiis optio
          iusto ab.
        </p>
        <RedesSociales />
      </Styled.Box>
    </Styled.Footer>
  );
};

export default Footer;
