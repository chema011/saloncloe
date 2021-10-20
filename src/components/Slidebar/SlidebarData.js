import * as BsIcons from 'react-icons/bs'; //Hagarrando iconos
import * as AiIcons from 'react-icons/ai';
// import * as RiIcon from 'react-icons/ri';
// import * as BiIcon from 'react-icons/bi';

export const SidebarData = [
  // {
  //   title: 'Novedades',
  //   path: '#novedades',
  //   icon: <BsIcons.BsNewspaper />,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Testimonios',
  //   path: '#testimonios',
  //   icon: <BiIcon.BiBookContent />,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Quiénes somos',
  //   path: '#quienesSomos',
  //   icon: <RiIcon.RiInformationFill />,
  //   cName: 'nav-text',
  // },
  {
    title: 'Galería',
    path: '#galeria',
    icon: <BsIcons.BsImages />,
    cName: 'nav-text',
  },
  {
    title: 'Contacto',
    path: '#contacto',
    icon: <AiIcons.AiFillPhone />,
    cName: 'nav-text',
  },
];
