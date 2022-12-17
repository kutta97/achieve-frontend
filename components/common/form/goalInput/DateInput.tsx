import { DatePicker } from '@components/datePicker/DatePicker';
import styled from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  onChangeStartDate: (date?: string) => void;
  onChangeEndDate: (date?: string) => void;
}

export const DateInput = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}: Props) => {
  return (
    <DateInputStyled>
      <p>from</p>
      <DatePicker
        placeHolder="start date"
        selectedDate={startDate}
        onChangeDate={onChangeStartDate}
      />
      <p>to</p>
      <DatePicker
        placeHolder="end date"
        selectedDate={endDate}
        onChangeDate={onChangeEndDate}
      />
    </DateInputStyled>
  );
};

const DateInputStyled = styled.span`
  display: flex;
  flex-direction: row;
  gap: 20px;

  p {
    margin-top: auto;
    margin-bottom: 13px;
  }
`;
