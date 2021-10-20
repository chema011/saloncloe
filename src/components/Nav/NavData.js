import * as FaIcon from 'react-icons/fa';
import * as BsIcon from 'react-icons/bs';
export const NavData = [
  {
    icon: '',
    contenido: 'Salón de fiestas Cloe',
    link: '#home',
  },
  {
    icon: <BsIcon.BsFacebook />,
    contenido: 'Redes Sociales',
    link: '#',
    valor: true,
  },
  {
    icon: <BsIcon.BsFillTelephoneFill />,
    contenido: 'llamar ahora',
    link: 'tel:+34662419031',
  },
  {
    icon: <FaIcon.FaDirections />,
    contenido: 'como llegar',
    link: 'https://www.google.com/maps/place/Carrer+de+Tolr%C3%A0,+14,+08032+Barcelona,+Espa%C3%B1a/@41.4265025,2.1536187,16.21z/data=!4m13!1m7!3m6!1s0x12a4bd4e72e0356d:0xd6dfee2acec845a6!2sCarrer+de+Tolr%C3%A0,+14,+08032+Barcelona,+Espa%C3%B1a!3b1!8m2!3d41.4266079!4d2.1561646!3m4!1s0x12a4bd4e72e0356d:0xd6dfee2acec845a6!8m2!3d41.4266079!4d2.1561646',
    newTab: true,
  },
];
