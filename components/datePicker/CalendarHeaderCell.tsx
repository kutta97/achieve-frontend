import styled from 'styled-components';

interface Props {
  text?: string;
}

export const CalendarHeaderCell = ({ text }: Props) => {
  return <CalendarCellFrame>{text}</CalendarCellFrame>;
};

const CalendarCellFrame = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  
  color: ${({ theme }) => theme.colors.ShadeGray70}
  cursor: pointer;
`;
