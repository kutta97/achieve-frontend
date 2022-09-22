import styled from 'styled-components';

import { SidebarNumber } from './SidebarNumber';

interface Props {
  number?: number;
  title?: string;
}

export const SidebarTitle = ({ number, title }: Props) => {
  return (
    <SidebarTitleFrame>
      <SidebarNumber number={number} />
      <p className="sidebar-title">{title}</p>
    </SidebarTitleFrame>
  );
};

const SidebarTitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 5px;

  .sidebar-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-top: 2px;
  }
`;
