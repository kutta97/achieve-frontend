import React from 'react';
import styled from 'styled-components';

import { Navbar } from './Navbar';

interface Props {
  children?: React.ReactNode;
}

export const NavLayout = ({ children }: Props) => {
  return (
    <NavLayoutStyled>
      <Navbar />
      <BodyFrame>{children}</BodyFrame>
    </NavLayoutStyled>
  );
};

const NavLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BodyFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
  margin: 0 auto;
`;
