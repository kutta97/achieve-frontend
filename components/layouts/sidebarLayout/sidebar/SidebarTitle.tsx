import styled from 'styled-components';

import { SidebarNumber } from './SidebarNumber';

interface Props {
  number?: number;
  title?: string;
}

export const SidebarTitle = ({ number, title }: Props) => {
  return (
    <SidebarTitleStyled>
      <SidebarNumber number={number} />
      <p className="sidebar-title">{title}</p>
    </SidebarTitleStyled>
  );
};

const SidebarTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 5px;

  .sidebar-title {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-top: 2px;
  }
`;
