import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutFrame>
      <Header />
      {children}
    </LayoutFrame>
  );
};

const LayoutFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
