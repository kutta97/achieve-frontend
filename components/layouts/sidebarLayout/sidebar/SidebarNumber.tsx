import styled from 'styled-components';

interface Props {
  number?: number;
}

export const SidebarNumber = ({ number }: Props) => {
  return <SidebarNumberFrame>{number}</SidebarNumberFrame>;
};

const SidebarNumberFrame = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.SolidPurple};

  padding-top: 2px;

  border: 1px solid ${({ theme }) => theme.colors.SolidPurple};
  border-radius: 8px;
`;
