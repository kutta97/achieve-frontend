import { Box } from '@components/common/box/Box';
import { IBadge } from '@vo/badges/IBadge';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  data?: IBadge;
}

export const BadgeItem = ({ data }: Props) => {
  return (
    <Box>
      <BadgeItemStyled color={data?.color}>
        <div className="badge-icon-wrap">
          <Image src={data?.imgSrc} alt="" width={120} height={120} />
        </div>
        <div className="badge-title-wrap">
          <h3>{data?.title}</h3>
          <p>{data?.description}</p>
        </div>
      </BadgeItemStyled>
    </Box>
  );
};

const BadgeItemStyled = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;

  .badge-icon-wrap {
    display: flex;
    justify-content: center;
    padding: 18px 0;
    background: ${({ color, theme }) => color || theme.colors.BasicWhite};
    border-radius: 30px 30px 0 0;
  }

  .badge-title-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
    padding: 10px 32px 20px 32px;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.BasicBlack};
      margin: 0;
    }

    p {
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: ${({ theme }) => theme.colors.BasicGray};
      margin: 0;
    }
  }
`;
