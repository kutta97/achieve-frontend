import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { NextPageWithLayout } from '../_app';

const Badges: NextPageWithLayout = () => {
  return <BadgesStyled></BadgesStyled>;
};

Badges.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const BadgesStyled = styled.div``;

export default Badges;
