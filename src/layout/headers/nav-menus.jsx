import Link from 'next/link';
import React from 'react';
import menu_data from './menu-data';

const NavMenus = ({textColor}) => {
  const newMenuData = menu_data.slice(0, -1) ;
  return (
    <ul>
      {newMenuData.map((menu, i) => (
        <li key={i} className={`${menu.has_dropdown ? 'has-dropdown' : ''}
      ${menu.mega_menu ? 'has-mega-menu' : ''}`}>
          <Link href={menu.link}>
            <a style={{ color: textColor}}>{menu.title} {menu.has_dropdown && <i className="fal fa-angle-down"></i>}</a>
          </Link>
          {menu.has_dropdown && <ul className="submenu text-start">
            {menu.sub_menus.map((sub_m, i) => (
              <li key={i}>
                <Link href={sub_m.link}>
                  <a style={{ color: textColor}}>{sub_m.title}</a>
                </Link>
              </li>
            ))}
          </ul>}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;