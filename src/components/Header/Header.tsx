import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from '../NavLink/NavLink';
import { HeaderStyle } from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <div className='container'>
        <nav>
          <Link href='/'>
            <a>
              <Image
                src='/Logo.svg'
                width='120'
                height='26'
                alt='DevTalksMz Logo'
              />
            </a>
          </Link>
          <NavLink />
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
