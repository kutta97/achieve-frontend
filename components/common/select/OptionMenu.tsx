import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface OptionMenuItem {
  id: any;
  value: any;
}

interface Props {
  className?: string;
  optionList: OptionMenuItem[];
  onSelectItem?: (id: any) => void;
}

export const OptionMenu = ({ className, optionList, onSelectItem }: Props) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: OptionMenuItem) => {
    onSelectItem?.(item.id);
    handleOpen();
  };

  return (
    <SelectFrame className={className} ref={selectRef}>
      <span className="option_menu" onClick={handleOpen}>
        <Image
          src="/assets/icon/menu/icon_menu_vertical.svg"
          alt=""
          width={28}
          height={28}
        />
      </span>
      {isOpen && (
        <OptionItems>
          <ul>
            {optionList.map((option) => (
              <OptionItem key={option.id} onClick={() => handleSelect(option)}>
                {option.value}
              </OptionItem>
            ))}
          </ul>
        </OptionItems>
      )}
    </SelectFrame>
  );
};

const SelectFrame = styled.div`
  position: relative;
  .option_menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.BasicWhite};

    cursor: pointer;
  }
`;

const OptionItems = styled.div`
  position: absolute;
  width: 180px;
  right: -5px;
  margin-top: 7px;
  background: ${({ theme }) => theme.colors.BasicWhite};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0;
  z-index: 10;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const OptionItem = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.ShadeGray80};
  padding: 8px 24px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.ShadeGray10};
  }
`;
