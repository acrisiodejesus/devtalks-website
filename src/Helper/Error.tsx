import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BiErrorAlt } from 'react-icons/bi';

const anime = keyframes`
from {
  transform: translateY(-20px);
}
to {
  transform: initial;
}
  
`;

const Erro = styled.div`
  margin: 3rem 0;
  padding: 2rem 1rem;
  max-width: 100%;
  text-align: center;

  svg {
    margin: 2rem auto;
    height: 10rem;
    width: 10rem;

    animation: 1s ${anime} infinite forwards;
  }
`;

type Props = {
  msg: string;
};

const Error = ({ msg }: Props) => {
  return (
    <Erro>
      <BiErrorAlt />
      <p>{msg}</p>
    </Erro>
  );
};

export default Error;
