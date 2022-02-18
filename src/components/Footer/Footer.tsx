import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import NavLink from '../NavLink/NavLink';
import { FooterStyle, Navigation, SocialMedia } from './style';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <>
          <Navigation>
            <section>
              <Image src='/LogoMini.png' alt='logo' width={100} height={100} />
              <div>
                <h3>DEVTALKSMZ</h3>
                <p>
                  Porque a programação é nosso forte e nós somos uma família
                </p>
              </div>
            </section>
            <NavLink />
          </Navigation>
          <Navigation>
            <p>Alguns direitos reservados.</p>
            <SocialMedia>
              <li>
                <a href=''>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href=''>
                  <FaYoutube />
                </a>
              </li>
            </SocialMedia>
          </Navigation>
        </>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
