import { DatePickerArrow } from '@components/datePicker/DatePickerArrow';
import React from 'react';
import styled from 'styled-components';

import {
  getMonthFromString,
  getTodayFullDateString,
  getYearFromString,
  parseStringToFullDateStringDash,
} from '../../utils/date';
import { CalendarBody } from './CalendarBody';

interface Props {
  isVisible?: boolean;
  selectedDate?: string;
  onChangeDate?: (date: string) => void;
}

export const DatePickerIndicator = ({
  isVisible,
  selectedDate,
  onChangeDate,
}: Props) => {
  const handlePrevMonthClick = () => {
    const date = new Date(selectedDate || getTodayFullDateString());
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);

    onChangeDate?.(parseStringToFullDateStringDash(date.toLocaleDateString()));
  };

  const handleNextMonthClick = () => {
    const date = new Date(selectedDate || getTodayFullDateString());
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);

    onChangeDate?.(parseStringToFullDateStringDash(date.toLocaleDateString()));
  };

  const handleDateClick = (date: string) => {
    onChangeDate?.(date);
  };

  if (!isVisible) return null;

  return (
    <DatePickerIndicatorFrame>
      <SelectMonth>
        <DatePickerArrow
          classNames="arrow"
          arrowType={'PREV'}
          onClick={handlePrevMonthClick}
        />
        {`${getYearFromString(
          selectedDate || getTodayFullDateString()
        )}.${getMonthFromString(
          selectedDate || getTodayFullDateString()
        ).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`}
        <DatePickerArrow
          classNames="arrow"
          arrowType={'NEXT'}
          onClick={handleNextMonthClick}
        />
      </SelectMonth>
      <SelectDate>
        <CalendarBody
          selectedDate={selectedDate || getTodayFullDateString()}
          onClickDate={handleDateClick}
        />
      </SelectDate>
    </DatePickerIndicatorFrame>
  );
};

const DatePickerIndicatorFrame = styled.span`
  position: absolute;
  top: 45px;
  left: 0;
  width: 338px;
  height: 366px;
  background: ${({ theme }) => theme.colors.BasicWhite};

  box-shadow: 0 15px 30px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 16px 20px;
`;

const SelectMonth = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.SolidPurple};

  .arrow {
    width: 32px;
  }
`;

const SelectDate = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
`;
