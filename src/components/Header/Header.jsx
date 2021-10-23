import React from 'react';

///Estilos
import * as Styled from './Header.style';

//Animaciones
import Bounce from 'react-reveal/Bounce';

//Datos
import { HeaderData } from './HeaderData';

const Header = () => {
  return (
    <Styled.Box id="casa">
      <Styled.BoxContent>
        {HeaderData.map((item, idx) => (
          <Bounce left cascade key={idx}>
            <p className={item.class}>{item.contenido}</p>
          </Bounce>
        ))}
      </Styled.BoxContent>
    </Styled.Box>
  );
};

export default Header;
