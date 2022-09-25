import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  path?: string;
  icon?: string;
  name?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const NavItem = ({ path, icon, name, selected, onClick }: Props) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <NavItemStyled selected={selected} onClick={handleClick}>
      {path && (
        <Link href={path} passHref={true}>
          <NavItemContent>
            {icon && <Image src={icon} alt="" width={24} height={24} />}
            <p className="nav-item-text">{name}</p>
          </NavItemContent>
        </Link>
      )}
    </NavItemStyled>
  );
};

const NavItemStyled = styled.li<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 6px 12px;
  cursor: pointer;
  mix-blend-mode: overlay;
  color: ${({ theme }) => theme.colors.BasicWhite};

  &:hover {
    mix-blend-mode: ${({ selected }) => (selected ? 'overlay' : 'normal')};
  }

  ${({ selected }) =>
    selected &&
    `
    background: #000000;
    border-radius: 10px;
  `}
`;

const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .nav-item-text {
    display: flex;
    padding-top: 4px;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`;
