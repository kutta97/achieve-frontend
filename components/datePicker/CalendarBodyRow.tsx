import styled from 'styled-components';

import { getDayStringFromString, getMonthFromString } from '../../utils/date';
import { CalendarCell } from './CalendarCell';

interface Props {
  dates: string[];
  selectedDate?: string;
  onClickDate?: (date: string) => void;
}

export const CalendarBodyRow = ({
  dates,
  selectedDate,
  onClickDate,
}: Props) => {
  return (
    <CalendarBodyRowFrame>
      {dates.map((date) => (
        <CalendarCell
          key={date}
          text={getDayStringFromString(date)}
          date={date}
          isSelected={selectedDate === date}
          isThisMonth={
            getMonthFromString(selectedDate) === getMonthFromString(date)
          }
          onClick={onClickDate}
        />
      ))}
    </CalendarBodyRowFrame>
  );
};

const CalendarBodyRowFrame = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;
