import React from 'react';
import Button from '../../utility/Button/Buttons';

///Estilos
import * as Styled from './Header.style';

//Animaciones

//Datos
import { HeaderData } from './HeaderData';

const Header = (props) => {
  return (
    <Styled.Box>
      <Styled.BoxContent>
        {HeaderData.map((item, idx) => (
          <p key={idx} className={item.class}>
            {item.contenido}
          </p>
        ))}
        <Button onClick={() => props.popup(true)}>
          Nuestras Redes Sociales
        </Button>
      </Styled.BoxContent>
      <Styled.BoxImg />
    </Styled.Box>
  );
};

export default Header;
