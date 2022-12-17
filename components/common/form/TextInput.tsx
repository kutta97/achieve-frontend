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
  isNumber?: boolean;
  isPassword?: boolean;
  showError?: boolean;
}

export const TextInput = observer(
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
      isNumber,
      isPassword,
      showError = true,
    } = props;

    const {
      field,
      fieldState: { error },
    } = useController(props);

    return (
      <TextInputStyled className={classname}>
        <Label>{label}</Label>
        <TextInputWrap
          {...field}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          isError={!!error?.message}
          value={value}
          defaultValue={value}
          type={isPassword ? 'password' : isNumber ? 'number' : 'text'}
        />
        {showError && error?.message && error.message}
      </TextInputStyled>
    );
  }
);

const TextInputStyled = styled.div`
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

const TextInputWrap = styled.input<{
  width?: number;
  disabled: boolean;
  isError: boolean;
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 43px;
  padding: 12px 16px;

  border: 1.5px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.SolidRed : theme.colors.SolidPurple};
  border-radius: 12px;
`;
