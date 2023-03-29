import menu from '/src/assets/menu.svg';
import crus from '/src/assets/tenedores.svg';
import { useState } from 'react';

export function NavBar() {
  const [menuVisble, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisble);
  }

  return (
    <div className="navbar">
      <img className='crus' src={crus} onClick={toggleMenu} style={{ display: menuVisble ? 'block' : 'none' }} />

      <img className='icon' src={menu} onClick={toggleMenu} style={{ display: menuVisble ? 'none' : 'block' }} />
      <div className="navbar_contenedor" style={{ display: menuVisble ? 'flex' : 'none', transform: menuVisble ? 'translateY(0)' : 'translateX(-100%)'}}>
        <a className='navbar_item' href="#">HOME</a>
        <a className='navbar_item' href="#">RECIPES</a>
        <a className='navbar_item' href="#">COMMENTS</a>
      </div>
    </div>
  )
}