import { Box } from '@components/common/box/Box';
import { useSidebar } from '@components/layouts/sidebarLayout/sidebar/hooks/useSidebar';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { SidebarBadges } from './SidebarBadges';
import { SidebarGoals } from './SidebarGoals';
import { SidebarProfile } from './SidebarProfile';

export const Sidebar = observer(() => {
  const { profile } = useSidebar();

  return (
    <Box width={230}>
      <SidebarStyled>
        <SidebarProfile
          name={profile?.name}
          image={profile?.image}
          description={profile?.description}
        />
        <SidebarInfo>
          <span>
            <SidebarDivider />
            <SidebarGoals
              goalCount={profile?.goalCount}
              goalList={profile?.goalList}
            />
          </span>
          <span>
            <SidebarDivider />
            <SidebarBadges
              badgeCount={profile?.badgeCount}
              badgeList={profile?.badgeList}
            />
          </span>
        </SidebarInfo>
      </SidebarStyled>
    </Box>
  );
});

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  padding: 40px 28px;
`;

const SidebarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SidebarDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 15px;

  background: ${({ theme }) => theme.colors.ShadeGray10};
`;
