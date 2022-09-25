import React from 'react';
import styled from 'styled-components';

export enum BulletColor {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  PURPLE = 'PURPLE',
  RED = 'RED',
}

interface Props {
  text?: string;
  bulletColor?: BulletColor;
}

export const BulletTitle = ({
  text,
  bulletColor = BulletColor.GREEN,
}: Props) => {
  return (
    <BulletTitleStyled>
      <Bullet color={bulletColor} />
      <p className="bullet-title-text">{text}</p>
    </BulletTitleStyled>
  );
};

const BulletTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  .bullet-title-text {
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.BasicBlack};

    padding-top: 3px;
    margin: 0;
  }
`;

const Bullet = styled.div<{ color: BulletColor }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color, theme }) => {
    switch (color) {
      case BulletColor.BLUE:
        return theme.colors.SolidBlue;
      case BulletColor.GREEN:
        return theme.colors.SolidGreen;
      case BulletColor.PURPLE:
        return theme.colors.SolidPurple;
      case BulletColor.RED:
        return theme.colors.SolidRed;
    }
  }};
`;
