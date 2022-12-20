import { Button } from '@components/common/button/Button';
import { IMAGE2 } from '@consts/imagePath';
import { IFriend } from '@vo/friends/IFriend';
import { observer } from 'mobx-react';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  data?: IFriend;
  onAccept?: (friendId: number, accept: boolean) => void;
}

export const AcceptFriendItem = observer(({ data, onAccept }: Props) => {
  const handleAcceptClick = (accept?: boolean) => {
    onAccept(data.id, accept);
  };

  return (
    <AcceptFriendItemStyled>
      <div className="friend-image-wrap">
        <Image src={data?.imgSrc || IMAGE2} alt="" width={70} height={70} />
      </div>
      <div className="friend-content-wrap">
        <h3>{data?.name}</h3>
        <p>{data?.description}</p>
      </div>
      <div className="button-wrap">
        <Button
          text="Accept!"
          className="submit-button"
          onClick={() => handleAcceptClick(true)}
        />
        <Button
          text="Ignore"
          style={{ background: '#FF3636' }}
          className="submit-button"
          onClick={() => handleAcceptClick(false)}
        />
      </div>
    </AcceptFriendItemStyled>
  );
});

const AcceptFriendItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.ShadeGray30};
  border-radius: 30px;
  padding: 9px 18px;

  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

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
  }

  .button-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    .submit-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;

      height: 30px;
      font-size: 12px;
      padding: 10px 10px;
      margin: 0;
    }
  }
`;
