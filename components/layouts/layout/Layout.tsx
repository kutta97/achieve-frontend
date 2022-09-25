import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
