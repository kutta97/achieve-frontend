import { observer } from 'mobx-react';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  classNames?: string | ReadonlyArray<string>;
  arrowType: 'PREV' | 'NEXT';
  onClick?: () => void;
}

export const DatePickerArrow: React.FC<Props> = observer(
  ({ classNames, arrowType, onClick }) => {
    const className =
      typeof classNames === 'object' ? classNames.join(' ') : classNames;

    const getImgSrc = (state: 'default' | 'hover' | 'focused') => {
      let arrowDirection = '';
      if (arrowType == 'PREV') arrowDirection = 'prev';
      if (arrowType == 'NEXT') arrowDirection = 'next';

      return `/assets/icon/datepicker/icon_arrow_${arrowDirection}_${state}.svg`;
    };

    const [arrowSrc, setArrowSrc] = useState(getImgSrc('default'));
    const [isHovering, setIsHovering] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
      onClick?.();
    };

    const handleHovering = (isHover: boolean) => () => {
      setIsHovering(isHover);
      isHovering
        ? setArrowSrc(getImgSrc('default'))
        : setArrowSrc(getImgSrc('hover'));
    };
    const handleFocus = (isFocus: boolean) => () => {
      setIsFocused(isFocus);
      isFocused
        ? setArrowSrc(getImgSrc('focused'))
        : setArrowSrc(getImgSrc('default'));
    };

    return (
      <DatePickerArrowFrame
        className={className}
        onMouseOver={handleHovering(true)}
        onMouseOut={handleHovering(false)}
        onFocus={handleFocus(true)}
        onBlur={handleFocus(false)}
        src={arrowSrc}
        onClick={handleClick}
      />
    );
  }
);

const DatePickerArrowFrame = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
