import { RoutePaths } from '@consts/RoutePaths';
import styled from 'styled-components';

import { NavItem } from './NavItem';

export const Navbar = () => {
  return (
    <NavbarStyled>
      <ul className="navigation-bar-wrap">
        <NavItem
          path={RoutePaths.overview}
          name="Overview"
          icon="/assets/icon/navigation/nav_icon_overview_default.svg"
        />
        <NavItem
          path={RoutePaths.goals}
          name="Goals"
          icon="/assets/icon/navigation/nav_icon_goals_default.svg"
        />
        <NavItem
          path={RoutePaths.badges}
          name="Badges"
          icon="/assets/icon/navigation/nav_icon_badges_default.svg"
        />
        <NavItem
          path={RoutePaths.friends}
          name="Friends"
          icon="/assets/icon/navigation/nav_icon_friends_default.svg"
        />
        <NavItem
          path={RoutePaths.groups}
          name="Groups"
          icon="/assets/icon/navigation/nav_icon_groups_default.svg"
        />
      </ul>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 62px;
  background: linear-gradient(104.62deg, #db8ee8 7.12%, #6e47ff 74.95%);

  .navigation-bar-wrap {
    display: flex;
    width: 1280px;
    flex-direction: row;
    margin: auto auto 2px auto;
    padding-left: 340px;
  }
`;
