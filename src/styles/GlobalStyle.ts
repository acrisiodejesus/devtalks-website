import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


html {
   font-size: 62.5%;
}
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
 font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   background: #1b1b1b;
}
a {
  text-decoration: none;
   font-size: 1.6rem;
   color: ${(props) => (props.theme ? '#cfd8dc' : '#252525')};
     
  &:hover {
    color: #1983ff;
  }
}

ul {
  list-style: none;
}

h2 {
  margin: 1rem 0;
  font-size: 3.3rem;
   @media (max-width:500px){
       font-size: 2rem;
    }
}

.sub {
  line-height: 48px;
  font-size: 2rem;
     @media (max-width:500px){
       font-size: 1rem;
    }
}

p {
  line-height: 1.8;
  margin: 1rem 0;
}

.container {
  max-width: 960px;
  margin:0 auto;
  padding: 0.6rem;
  }
`;
