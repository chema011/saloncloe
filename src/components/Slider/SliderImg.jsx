import React from 'react';
import Slider from 'react-slick';

///Estilos
import * as Styled from './SliderImg.Style';

//Datos
import { SliderImgData } from './SliderImgData';

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
  };
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
