import React from 'react';

///Estilos
import * as Styled from './Header.style';

//Datos
import { HeaderData } from './HeaderData';

const Header = () => {
  return (
    <Styled.Box>
      {HeaderData.map((item, idx) => (
        <p key={idx} className={item.class}>{item.contenido}</p>
      ))}
      
    </Styled.Box>
  );
};

export default Header;
