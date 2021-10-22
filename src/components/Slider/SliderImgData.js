import Img1 from '../../img/Img1.jpeg';
import Img2 from '../../img/Img2.jpeg';
import Img3 from '../../img/Img3.jpeg';
import Img4 from '../../img/Img4.jpeg';

export const SliderImgData = [
  { src: Img1 },
  { src: Img2 },
  { src: Img3 },
  { src: Img4 },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',

  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
