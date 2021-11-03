import * as BsIcons from 'react-icons/bs'; //Hagarrando iconos
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa"

export const SidebarData = [
  {
    title: 'Inicio',
    path: '#casa',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Galería',
    path: '#galeria',
    icon: <BsIcons.BsImages />,
    cName: 'nav-text',
  },
  {
    title: 'Local',
    path: '#local',
    icon: <FaIcons.FaStoreAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Mapa',
    path: '#mapa',
    icon: <BsIcons.BsMapFill />,
    cName: 'nav-text',
  },
];
