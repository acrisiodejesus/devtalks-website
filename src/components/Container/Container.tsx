import React from 'react';
import { ContainerStyle } from './style';

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
