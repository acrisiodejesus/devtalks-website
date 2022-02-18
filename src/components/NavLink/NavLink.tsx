import React from 'react';
import Link from 'next/link';
import { NavLiks } from './style';

const NavLink = () => {
  return (
    <NavLiks>
      <li>
        <Link href='eventos'>Eventos</Link>
      </li>
      <li>
        <Link href='sobre'>Sobre</Link>
      </li>
    </NavLiks>
  );
};

export default NavLink;
