import React from 'react';
import styled from 'styled-components';

import { Sidebar } from './sidebar/Sidebar';

interface Props {
  children?: React.ReactNode;
}

export const SidebarLayout = ({ children }: Props) => {
  return (
    <SidebarLayoutStyled>
      <Sidebar />
      <ContentFrame>{children}</ContentFrame>
    </SidebarLayoutStyled>
  );
};

const SidebarLayoutStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 75px;
  width: 100%;
  margin: 35px 45px;
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
