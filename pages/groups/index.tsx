import { NavLayout } from '@components/layouts/navLayout/NavLayout';
import { SidebarLayout } from '@components/layouts/sidebarLayout/SidebarLayout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { NextPageWithLayout } from '../_app';

const Groups: NextPageWithLayout = () => {
  return <GroupsStyled></GroupsStyled>;
};

Groups.getLayout = (page: ReactElement) => {
  return (
    <NavLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </NavLayout>
  );
};

const GroupsStyled = styled.div``;

export default Groups;
