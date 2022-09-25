import React from 'react';
import styled from 'styled-components';

export enum TagColor {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  PURPLE = 'PURPLE',
  RED = 'RED',
}

interface Props {
  text?: string;
  tagColor?: TagColor;
}

export const Tag = ({ text, tagColor = TagColor.GREEN }: Props) => {
  return <TagStyled color={tagColor}>{text}</TagStyled>;
};

const TagStyled = styled.p<{ color: TagColor }>`
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;

  color: ${({ color, theme }) => {
    switch (color) {
      case TagColor.BLUE:
        return theme.colors.DarkBlue;
      case TagColor.GREEN:
        return theme.colors.DarkGreen;
      case TagColor.PURPLE:
        return theme.colors.DarkPurple;
      case TagColor.RED:
        return theme.colors.DarkRed;
    }
  }};

  background: ${({ color, theme }) => {
    switch (color) {
      case TagColor.BLUE:
        return theme.colors.LightBlue;
      case TagColor.GREEN:
        return theme.colors.LightGreen;
      case TagColor.PURPLE:
        return theme.colors.LightPurple;
      case TagColor.RED:
        return theme.colors.LightRed;
    }
  }};

  border-radius: 12px;
  margin: 0;
  padding: 3px 10px 1px 10px;
`;
