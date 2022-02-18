import styled from 'styled-components';

export const About = styled.main`
  margin: 3rem 0;
  color: white;

  h3 {
    text-align: center;
  }

  section {
    margin: 6rem 0;
  }
`;

export const MemberStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .profile {
    background: white;
    height: 20rem;
    border-radius: 0.3rem;
  }

  .content {
    h4 {
      margin: 0 0 1rem 0;
    }
    span {
      margin: 0.6rem 0;
      font-weight: bold;
      color: #77aa32;
    }
  }
  @media (max-width: 500) {
    grid-template-columns: 1fr;
  }
`;
