import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import * as Styled from './Nav.style.js';
import { IconContext } from 'react-icons';

//Animaciones
import Fade from 'react-reveal/Fade';

//Data
import { NavData } from './NavData.js';

//Componentes
import Slidebar from '../Slidebar/Slidebar';
import RedesSociales from '../RedesSociales/RedesSociales';

const Menu = (props) => {
  return (
    <>
      <Styled.Nav>
        {/* Padre */}
        <Fade top>
          <Styled.Flex>
            {/* Flex */}
            <Slidebar />
            {/*  */}
            <Styled.Box>
              <IconContext.Provider value={{ color: 'pink' }}>
                {NavData.map((item, index) => (
                  <Fade key={index} bottom delay={item.time}>
                    <li>
                      <Styled.Link
                        href={item.link}
                        target={item.newTab && '_blank'}
                      >
                        {item.icon}
                        {item.contenido}
                      </Styled.Link>
                    </li>
                  </Fade>
                ))}
                <Fade right delay={3900}>
                  <RedesSociales />
                </Fade>
              </IconContext.Provider>
            </Styled.Box>
            {/*  */}
            {/* Flex */}
          </Styled.Flex>
        </Fade>
        {/* Padre */}
      </Styled.Nav>

      <Styled.BoxMedia>
        <IconContext.Provider value={{ color: 'pink' }}>
          {NavData.map((item, index) => (
            <li key={index}>
              <Styled.Link href={item.link} target={item.newTab && '_blank'}>
                {item.icon}
                {item.contenido}
              </Styled.Link>
            </li>
          ))}
        </IconContext.Provider>
      </Styled.BoxMedia>
    </>
  );
};

const Nav = () => {
  return ReactDOM.createPortal(<Menu />, document.getElementById('root-menu'));
};

export default Nav;
