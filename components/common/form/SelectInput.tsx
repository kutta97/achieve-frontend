import { observer } from 'mobx-react';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import styled from 'styled-components';

export interface OptionItemType {
  id: any;
  value: any;
}

interface Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  classname?: string;
  placeholder?: string;
  disabled?: boolean;
  itemList?: OptionItemType[];
  label?: string;
  width?: number;
  showError?: boolean;
}

export const SelectInput = observer(
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
    props: Props<TFieldValues, TName>
  ) => {
    const {
      classname,
      placeholder,
      disabled,
      itemList,
      label,
      width,
      showError,
    } = props;

    const {
      field,
      fieldState: { error },
    } = useController(props);

    return (
      <SelectInputStyled className={classname}>
        <>
          <Label>{label}</Label>
          <SelectInputWrap
            {...field}
            placeholder={placeholder}
            width={width}
            disabled={disabled}
            isError={!!error?.message}
          >
            {itemList.map((item) => (
              <option value={item.id} key={item.id}>
                {item.value}
              </option>
            ))}
          </SelectInputWrap>
          {showError && error?.message && error.message}
        </>
      </SelectInputStyled>
    );
  }
);

const SelectInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ theme }) => theme.colors.SolidRed};
`;

const Label = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: ${({ theme }) => theme.colors.BasicBlack};
`;

const SelectInputWrap = styled.select<{
  width?: number;
  disabled: boolean;
  isError: boolean;
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 43px;
  padding: 0 16px;

  border: 1.5px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.SolidRed : theme.colors.SolidPurple};
  border-radius: 12px;
`;
