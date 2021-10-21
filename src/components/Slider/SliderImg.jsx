import React from 'react';
import Slider from 'react-slick';

///Estilos
import * as Styled from './SliderImg.Style';

///Animaciones
import Fade from 'react-reveal/Fade';

//Datos
import { SliderImgData, settings } from './SliderImgData';

const SliderImg = () => {
  return (
    <Styled.Container id="galeria">
      <h2>Galeria</h2>
      <Slider {...settings}>
        {SliderImgData.map((item, idx) => (
          <Fade right key={idx} delay={1000}>
            <Styled.Img src={item.src} />
          </Fade>
        ))}
      </Slider>
    </Styled.Container>
  );
};

export default SliderImg;
