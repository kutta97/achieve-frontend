import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { FriendsFragment } from '../../fragments/friends/FriendsFragment';
import { NextPageWithLayout } from '../_app';

const Friends: NextPageWithLayout = () => {
  return (
    <FriendsStyled>
      <FriendsFragment />
    </FriendsStyled>
  );
};

Friends.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const FriendsStyled = styled.div``;

export default Friends;
