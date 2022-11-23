import React from 'react'
import CartWitget from '../CartWidget/CartWidget';

const NavBar = () => {
  const menu = ['Laminas','Figuritas'];
  
  return (
    <div>
        <nav>
            <li>Home</li>
            <li>Laminas</li>
            <li>Figuras</li>
        </nav>
        <CartWitget />
    </div>
  );
};

export default NavBar