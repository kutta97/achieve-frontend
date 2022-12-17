import styled from 'styled-components';

interface Props {
  text?: string;
  date?: string;
  isSelected?: boolean;
  isThisMonth?: boolean;
  onClick?: (date: string) => void;
}

export const CalendarCell = ({
  text,
  date,
  isSelected,
  isThisMonth,
  onClick,
}: Props) => {
  const handleClick = () => {
    onClick?.(date);
  };

  return (
    <CalendarCellFrame
      selected={isSelected}
      isThisMonth={isThisMonth}
      onClick={handleClick}
    >
      {text}
    </CalendarCellFrame>
  );
};

const CalendarCellFrame = styled.span<{
  selected: boolean;
  isThisMonth: boolean;
}>`
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

  color: ${({ isThisMonth, theme }) =>
    isThisMonth ? theme.colors.ShadeGray70 : theme.colors.ShadeGray40};
  cursor: pointer;

  ${({ selected, theme }) =>
    selected &&
    `
    color: ${theme.colors.BasicWhite};
    background: ${theme.colors.SolidPurple};
    border-radius: 50%;
  `}

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.LightPurple} inset;
    border-radius: 50%;
  }
`;
