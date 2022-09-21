import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  path?: string;
  icon?: string;
  name?: string;
  selected?: boolean;
}

export const NavItem = ({ path, icon, name, selected }: Props) => {
  return (
    <NavItemFrame selected={selected}>
      {path && (
        <Link href={path} passHref={true}>
          <NavItemContent>
            {icon && <Image src={icon} alt="" width={24} height={24} />}
            <p className="nav-item-text">{name}</p>
          </NavItemContent>
        </Link>
      )}
    </NavItemFrame>
  );
};

const NavItemFrame = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 6px 12px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.BasicWhite};

  color: ${(props) => (props.selected ? `white` : `white`)};

  &:hover {
    background: #000000;
    mix-blend-mode: overlay;
    border-radius: 10px;
  }
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
