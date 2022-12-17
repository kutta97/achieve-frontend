import styled from 'styled-components';

import {
  getDaysInMonth,
  getMonthFromString,
  getYearFromString,
} from '../../utils/date';
import { CalendarBodyRow } from './CalendarBodyRow';
import { CalendarHeaderCell } from './CalendarHeaderCell';

const WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface Props {
  selectedDate: string;
  onClickDate?: (date: string) => void;
}

export const CalendarBody = ({ selectedDate, onClickDate }: Props) => {
  const year = getYearFromString(selectedDate);
  const month = getMonthFromString(selectedDate);
  const daysInMonth = getDaysInMonth(month - 1, year);

  const handleClickDate = (date: string) => {
    onClickDate?.(date);
  };

  return (
    <CalendarBodyFrame>
      <CalendarHeader>
        {WeekDays.map((day) => (
          <CalendarHeaderCell key={day} text={day} />
        ))}
      </CalendarHeader>
      {daysInMonth.map((daysInWeek, index) => (
        <CalendarBodyRow
          key={index}
          dates={daysInWeek}
          selectedDate={selectedDate}
          onClickDate={handleClickDate}
        />
      ))}
    </CalendarBodyFrame>
  );
};

const CalendarBodyFrame = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CalendarHeader = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;
