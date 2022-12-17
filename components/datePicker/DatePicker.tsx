import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { getTodayFullDateString } from '../../utils/date';
import { DatePickerIndicator } from './DatePickerIndicator';

interface Props {
  placeHolder?: string;
  selectedDate?: string;
  onChangeDate: (date: string) => void;
}

export const DatePicker = ({
  placeHolder,
  selectedDate,
  onChangeDate,
}: Props) => {
  const datePickerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(e.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  const handleOnChangeDate = (date?: string) => {
    onChangeDate(date);
  };

  const handleClick = () => {
    setIsVisible(true);
    if (!selectedDate) onChangeDate(getTodayFullDateString());
  };

  return (
    <DatePickerFrame
      ref={datePickerRef}
      isDateSelected={!!selectedDate}
      isCalendarOpen={isVisible}
      onClick={handleClick}
    >
      <p className="placeholder">{selectedDate || placeHolder}</p>
      <input
        className="datepicker-input"
        type="date"
        required
        pattern="\d{4}-\d{2}-\d{2}"
        value={selectedDate}
        readOnly={true}
      />
      <DatePickerIndicator
        isVisible={isVisible}
        selectedDate={selectedDate}
        onChangeDate={handleOnChangeDate}
      />
    </DatePickerFrame>
  );
};

const DatePickerFrame = styled.span<{
  isDateSelected: boolean;
  isCalendarOpen: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;

  width: 120px;
  height: 43px;
  padding: 12px 16px;

  border: 1.5px solid ${({ theme }) => theme.colors.SolidPurple};
  border-radius: 12px;

  .placeholder {
    color: ${({ isDateSelected, theme }) =>
      isDateSelected ? theme.colors.ShadeGray80 : theme.colors.ShadeGray40};
  }

  .datepicker-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
  }

  &:hover {
    background: ${({ isCalendarOpen, theme }) =>
      !isCalendarOpen && theme.colors.ShadeGray10};
  }

  ${({ isCalendarOpen, theme }) =>
    isCalendarOpen &&
    `
    background: ${theme.colors.BasicWhite};
    border: 1.5px solid ${theme.colors.SolidPurple};
  `};
`;
