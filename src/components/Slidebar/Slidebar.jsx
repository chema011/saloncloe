import React, { useState } from 'react';

// ICONS
import * as FaIcons from 'react-icons/fa'; //Now i get access to all the icons
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons';

// DATA FILE
import { SidebarData } from './SlidebarData';

// Rutas
import { Link } from 'react-router-dom';

// STYLES
import './Navbar.css';

export default function Slidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#FFF' }}>
        {/* All the icons now are white */}
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
