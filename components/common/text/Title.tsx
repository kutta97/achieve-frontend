import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

export const Title = ({ text }: Props) => {
  return <TitleStyled>{text}</TitleStyled>;
};

const TitleStyled = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.BasicBlack};
  margin: 0;
`;
