import React from 'react';
import Slider from 'react-slick';

///Estilos
import * as Styled from './SliderImg.Style';

//Datos
import { SliderImgData, settings } from './SliderImgData';

const SliderImg = () => {
  return (
    <Styled.Container id="galeria">
      <h2>Galeria</h2>
      <Styled.Box>
        <Slider {...settings}>
          {SliderImgData.map((item, idx) => (
            <div>
              <Styled.Img key={idx} src={item.src} />
            </div>
          ))}
        </Slider>
      </Styled.Box>
    </Styled.Container>
  );
};

export default SliderImg;
