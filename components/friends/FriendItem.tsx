import { Box } from '@components/common/box/Box';
import { IFriend } from '@vo/friends/IFriend';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  data?: IFriend;
}

export const FriendItem = ({ data }: Props) => {
  return (
    <Box>
      <FriendItemStyled>
        <div className="friend-image-wrap">
          <Image src={data?.imgSrc} alt="" width={70} height={70} />
        </div>
        <div className="friend-content-wrap">
          <h3>{data?.name}</h3>
          <p>{data?.description}</p>
        </div>
        <div className="friend-menu-wrap">
          <Image
            src="/assets/icon/menu/icon_menu_vertical.svg"
            alt=""
            width={28}
            height={28}
          />
        </div>
      </FriendItemStyled>
    </Box>
  );
};

const FriendItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  .friend-image-wrap {
    display: flex;
    justify-content: center;
    margin: 5px 15px;
  }

  .friend-content-wrap {
    display: flex;
    flex-direction: column;
    margin: 5px auto 5px 15px;
    white-space: pre;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.BasicBlack};
      margin: 0 0 15px 0;
    }

    p {
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: ${({ theme }) => theme.colors.BasicGray};
      margin: 0;
    }

    .friend-menu-wrap {
      width: 28px;
    }
  }
`;
