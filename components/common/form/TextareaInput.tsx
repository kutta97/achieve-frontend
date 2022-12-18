import { observer } from 'mobx-react';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import styled from 'styled-components';

interface Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  classname?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  label?: string;
  width?: number;
  showError?: boolean;
}

export const TextareaInput = observer(
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
    props: Props<TFieldValues, TName>
  ) => {
    const {
      classname,
      placeholder,
      disabled,
      value,
      label,
      width,
      showError = true,
    } = props;

    const {
      field,
      fieldState: { error },
    } = useController(props);

    return (
      <TextareaInputStyled className={classname}>
        <Label>{label}</Label>
        <TextareaInputWrap
          {...field}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          isError={!!error?.message}
          value={value}
          defaultValue={value}
        />
        {showError && error?.message && error.message}
      </TextareaInputStyled>
    );
  }
);

const TextareaInputStyled = styled.div`
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

const TextareaInputWrap = styled.textarea<{
  width?: number;
  disabled: boolean;
  isError: boolean;
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 100px;
  padding: 12px 16px;

  border: 1.5px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.SolidRed : theme.colors.SolidPurple};
  border-radius: 12px;
`;
