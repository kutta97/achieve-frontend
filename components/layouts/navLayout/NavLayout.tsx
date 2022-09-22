import React from 'react';
import styled from 'styled-components';

import { Navigation } from './Navigation';

interface Props {
  children?: React.ReactNode;
  selectedPage?: string;
}

export const NavLayout = ({ children, selectedPage }: Props) => {
  return (
    <NavLayoutFrame>
      <Navigation selected={selectedPage} />
      <BodyFrame>{children}</BodyFrame>
    </NavLayoutFrame>
  );
};

const NavLayoutFrame = styled.div`
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
