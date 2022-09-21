import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { NavLayout } from '../../components/layouts/navLayout/NavLayout';
import { NextPageWithLayout } from '../_app';

const Overview: NextPageWithLayout = () => {
  return <OverviewFrame></OverviewFrame>;
};

const OverviewFrame = styled.div``;

Overview.getLayout = (page: ReactElement) => {
  return <NavLayout selectedPage="OVERVIEW">{page}</NavLayout>;
};

export default Overview;
