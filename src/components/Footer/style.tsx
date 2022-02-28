import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 4rem;
  background: #2d2d2e;
`;

export const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  li {
    a {
      padding: 1.2rem;
      background: #1b1b1b;
      border-radius: 0.3rem;
      color: white;
      &:hover {
        background: #5fb91e;
      }
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 2rem 0;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
    div {
      max-width: 30rem;
      p {
        font-family: 'Akaya Telivigala', cursive;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    section {
      margin: 1rem 0;
    }
  }
`;
