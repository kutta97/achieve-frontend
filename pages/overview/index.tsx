import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { OverviewFragment } from '../../fragments/overview/OverviewFragment';
import { NextPageWithLayout } from '../_app';

const Overview: NextPageWithLayout = () => {
  return (
    <OverviewStyled>
      <OverviewFragment />
    </OverviewStyled>
  );
};

Overview.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const OverviewStyled = styled.div``;

export default Overview;
