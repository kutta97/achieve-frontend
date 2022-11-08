import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const Button = ({ text, ...props }: Props) => {
  return <ButtonStyled {...props}>{text}</ButtonStyled>;
};

const ButtonStyled = styled.button<{ width?: number; height?: number }>`
  display: flex;
  background: ${({ theme }) => theme.colors.SolidPurple};
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.BasicWhite};

  &:hover {
    color: ${({ theme }) => theme.colors.ShadeGray30};
    background: ${({ theme }) => theme.colors.DarkPurple};
  }
`;
