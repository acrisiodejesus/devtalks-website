import styled from 'styled-components';

export const NavLiks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  li {
    a {
      padding: 1rem 1.8rem;
      text-align: center;
      border-radius: 0.3rem;
      color: #e9e0e0;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;

      &:hover {
        background: #60ba1e;
      }
    }
  }
`;
