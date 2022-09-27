import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  checked?: boolean;
  onCheck?: (value: boolean) => void;
}

export const RoundCheckbox = ({ checked, onCheck }: Props) => {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = () => {
    setChecked(!isChecked);
    onCheck?.(!isChecked);
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <RoundCheckboxStyled>
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
      />
      <Image
        className="checkbox-icon"
        src={
          isChecked
            ? '/assets/icon/checkbox/icon_checkbox_round_checked.svg'
            : '/assets/icon/checkbox/icon_checkbox_round_unchecked.svg'
        }
        alt=""
        width={20}
        height={20}
      />
    </RoundCheckboxStyled>
  );
};

const RoundCheckboxStyled = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  cursor: pointer;

  .checkbox {
    display: none;
  }

  .checkbox-icon {
  }
`;
