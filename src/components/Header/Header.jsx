import React from 'react';

///Estilos
import * as Styled from './Header.style';

//Animaciones
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

//Datos
import { HeaderData } from './HeaderData';

const Header = () => {
  return (
    <Styled.Box id="casa">
      <Styled.BoxContent>
        {HeaderData.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.contenido && (
              <>
                <div className="bounce">
                  <Bounce left cascade>
                    <p className={item.class}>{item.contenido}</p>
                  </Bounce>
                </div>
                <div className="bouncePhone">
                  <Bounce left>
                    <p className={item.class}>{item.contenido}</p>
                  </Bounce>
                </div>
              </>
            )}
            {item.img && (
              <Fade top delay={1000}>
                <img className={item.class} src={item.img} alt={item.alt} />
              </Fade>
            )}
          </React.Fragment>
        ))}
      </Styled.BoxContent>
    </Styled.Box>
  );
};

export default Header;
