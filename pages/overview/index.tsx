import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { NextPageWithLayout } from '../_app';

const Overview: NextPageWithLayout = () => {
  return <OverviewFrame></OverviewFrame>;
};

Overview.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const OverviewFrame = styled.div``;

export default Overview;
