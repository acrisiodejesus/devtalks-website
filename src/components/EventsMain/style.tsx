import styled, { keyframes } from 'styled-components';

export const EventsMainsStyle = styled.section`
  background: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0.6rem;
`;
export const EventsContainer = styled.div`
  background: #2d2d2e;
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem;
  border-radius: 4px;
`;

export const OrnedenadList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.1rem;

  li {
    display: grid;
    width: 100%;
  }
`;

interface Button {
  show: Boolean;
}
const AnimeTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;
export const ButtonShowEvents = styled.button<Button>`
  cursor: pointer;
  display: block;
  padding: 1.2rem;
  border: none;
  background: #1b1b1b;
  color: whitesmoke;
  font-weight: bold;
  border-bottom: 2px solid
    ${(props) => (props.show ? '#60ba1e' : 'transparent')};
`;

export const ContentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  color: white;

  li {
    img {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
    opacity: 0;
    transform: scale(0.8);
    animation: ${AnimeTop} 0.3s forwards;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
