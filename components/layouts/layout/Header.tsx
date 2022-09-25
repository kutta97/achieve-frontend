import Image from 'next/image';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderStyled>
      <Image
        src="/assets/icon/logo/achieve_logo_title.svg"
        alt=""
        width={122}
        height={24}
      />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 8px 16px;

  background: ${({ theme }) => theme.colors.BasicWhite};
`;
