import styled from 'styled-components';

export const MainStyle = styled.section`
  background: url('headerbg.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 550px;
  height: 100%;
  color: whitesmoke;

  display: flex;
  align-items: center;
  justify-content: center;
  div {
    max-width: 600px;
    padding: 0.6rem;
    span {
      text-align: center;

      a {
        padding: 0.8rem 1rem;
        background: #60ba1e;
        border-radius: 0.3rem;
        text-align: center;
        color: white;
        display: block;
        max-width: 20rem;
        margin: 2rem auto;
        border: 3px solid transparent;

        &:hover {
          border: 3px solid white;
        }
      }
    }
  }
`;
