import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { GoalsFragment } from '../../fragments/goals/GoalsFragment';
import { NextPageWithLayout } from '../_app';

const Goals: NextPageWithLayout = () => {
  return (
    <GoalsStyled>
      <GoalsFragment />
    </GoalsStyled>
  );
};

Goals.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const GoalsStyled = styled.div``;

export default Goals;
