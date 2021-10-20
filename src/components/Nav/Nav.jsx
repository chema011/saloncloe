import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import * as Styled from './Nav.style.js';
import { IconContext } from 'react-icons';

//Data
import { NavData } from './NavData.js';

//Componentes
import Slidebar from '../Slidebar/Slidebar';

const Menu = (props) => {
  return (
    <>
      <Styled.Nav>
        {/* Padre */}
        <Styled.Flex>
          {/* Flex */}
          <Slidebar />
          {/*  */}
          <Styled.Box>
            <IconContext.Provider value={{ color: 'pink' }}>
              {NavData.map((item, index) => (
                <li key={index}>
                  <Styled.Link
                    href={item.link}
                    target={item.newTab && '_blank'}
                    onClick={() => props.popup(item.valor)}
                  >
                    {item.icon}
                    {item.contenido}
                  </Styled.Link>
                </li>
              ))}
            </IconContext.Provider>
          </Styled.Box>
          {/*  */}
          {/* Flex */}
        </Styled.Flex>
        {/* Padre */}
      </Styled.Nav>

      <Styled.BoxMedia>
        <IconContext.Provider value={{ color: '#FFF' }}>
          {NavData.map((item, index) => (
            <li key={index}>
              <Styled.Link
                href={item.link}
                target={item.newTab && '_blank'}
                onClick={() => props.popup(item.valor)}
              >
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

const Nav = (props) => {
  return ReactDOM.createPortal(<Menu popup={props.popup}/>, document.getElementById('root-menu'));
};

export default Nav;
