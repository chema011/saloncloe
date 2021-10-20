import React from 'react';
import Button from '../../utility/Button/Buttons';

///Estilos
import * as Styled from './Header.style';

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
      <Styled.BoxImg>
        <iframe
          Title="My iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.5812521653193!2d2.153975915426984!3d41.42660787926057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd4e72e0356d%3A0xd6dfee2acec845a6!2sCarrer%20de%20Tolr%C3%A0%2C%2014%2C%2008032%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2shn!4v1634725269713!5m2!1ses!2shn"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
        />
      </Styled.BoxImg>
    </Styled.Box>
  );
};

export default Header;
