import React from 'react';
import Fade from 'react-reveal/Fade';

// Estilos
import * as Styled from './Popup.style';

//Logos
import * as AiIcon from 'react-icons/ai';

// Componentes
import Form from '../Form/Form';

const Popup = (props) => {
  return (
    <Styled.Modal>
      <Fade top>
        <Styled.ModalContent>
          <Styled.Flex>
            <p>Formulario</p>
            <AiIcon.AiFillCloseCircle onClick={() => props.popup(false)} />
          </Styled.Flex>
          <Form />
        </Styled.ModalContent>
      </Fade>
    </Styled.Modal>
  );
};

export default Popup;
