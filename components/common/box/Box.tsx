import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

export const Box = ({ width, height, ...props }: Props) => {
  return (
    <BoxFrame width={width} height={height} {...props}>
      {props.children}
    </BoxFrame>
  );
};

const BoxFrame = styled.div<{ width?: number; height?: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height ?? height};

  background: ${({ theme }) => theme.colors.BasicWhite};
  box-shadow: 0 10px 60px rgba(200, 216, 236, 0.5);
  border-radius: 30px;

  &:hover {
    box-shadow: 0 10px 60px #c8d8ec;
  }
`;
