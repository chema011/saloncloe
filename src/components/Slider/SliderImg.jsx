import React from 'react';
import Slider from 'react-slick';

///Estilos
import * as Styled from './SliderImg.Style';

//Datos
import { SliderImgData, settings } from './SliderImgData';

const SliderImg = () => {
  
  return (
    <Styled.Container id="galeria">
      <Slider {...settings}>
        {SliderImgData.map((item, idx) => (
          <Styled.Img src={item.src} />
        ))}
      </Slider>
    </Styled.Container>
  );
};

export default SliderImg;
