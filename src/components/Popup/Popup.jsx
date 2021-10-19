import React from 'react';
import Fade from 'react-reveal/Fade';

// Estilos
import * as Styled from './Popup.style';

//Logos
import * as AiIcon from 'react-icons/ai';

// Componentes
import RedesSociales from '../RedesSociales/RedesSociales';

const Popup = (props) => {
  return (
    <Styled.Modal>
      <Fade top>
        <Styled.ModalContent>
          <Styled.Flex>
            <p>Nuestras Redes Sociales</p>
            <AiIcon.AiFillCloseCircle onClick={() => props.popup(false)} />
          </Styled.Flex>
          <RedesSociales/>
        </Styled.ModalContent>
      </Fade>
    </Styled.Modal>
  );
};

export default Popup;
