import Image from 'next/image';
import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  disabled?: boolean;
}

export const ToggleList = ({ title, disabled = true, ...props }: Props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setToggle(!toggle);
  };

  return (
    <ToggleListStyled {...props}>
      <ToggleListTitle toggle={toggle} onClick={handleClick}>
        <Image
          src={
            toggle
              ? '/assets/icon/toggleList/icon_toggle_list_opened.svg'
              : '/assets/icon/toggleList/icon_toggle_list_closed.svg'
          }
          alt=""
          width={16}
          height={16}
        />
        {title}
      </ToggleListTitle>
      {toggle && props.children}
    </ToggleListStyled>
  );
};

const ToggleListStyled = styled.div``;

const ToggleListTitle = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ toggle, theme }) =>
    toggle ? theme.colors.BasicBlack : theme.colors.ShadeGray50};

  cursor: pointer;
`;
