import { observer } from 'mobx-react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  register?: UseFormRegisterReturn;
  classname?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  label?: string;
  width?: number;
  isNumber?: boolean;
  errors?: FieldErrors;
  isPassword?: boolean;
}

export const TextInput = observer(
  ({
    register,
    placeholder,
    classname,
    disabled,
    value,
    label,
    width,
    isPassword,
    isNumber,
    errors,
  }: Props) => {
    return (
      <TextInputStyled className={classname}>
        <>
          <Label>{label}</Label>
          <TextInputWrap
            {...register}
            placeholder={placeholder}
            width={width}
            disabled={disabled}
            isError={!!errors?.[register.name]?.message}
            value={value}
            defaultValue={value}
            type={isPassword ? 'password' : isNumber ? 'number' : 'text'}
          />
          {errors?.[register.name]?.message && errors[register.name].message}
        </>
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
