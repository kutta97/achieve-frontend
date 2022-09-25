import styled from 'styled-components';

import { SidebarTitle } from './SidebarTitle';

interface Props {
  badgeCount?: number;
  badgeList?: string[];
}

export const SidebarBadges = ({ badgeCount, badgeList }: Props) => {
  return (
    <SidebarBadgesFrame>
      <SidebarTitle title="Badges" number={badgeCount} />
    </SidebarBadgesFrame>
  );
};

const SidebarBadgesFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
