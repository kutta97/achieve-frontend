import { IActivityDetail } from '@vo/overview/IRecentActivity';
import styled from 'styled-components';

import { RecentActivityType } from '../../../types/recentActivityType';

interface Props {
  contentList?: IActivityDetail[];
  activityType?: RecentActivityType;
}

export const RecentActivityItemContent = ({
  contentList,
  activityType,
}: Props) => {
  const getTitle = (length: number) => {
    switch (activityType) {
      case 'CREATE_GOAL':
        return length === 1 ? `Created a Goal` : `Created ${length} Goals`;
      case 'ACHIEVE_GOAL':
        return length === 1 ? `Achieved a Goal` : `Achieved ${length} Goals`;
      case 'GOT_BADGE':
        return length === 1 ? `Got a Badge` : `God ${length} Badges`;
    }
  };

  return (
    <>
      {contentList?.length > 0 && (
        <RecentActivityItemContentStyled>
          <div className="info">
            <h3 className="title">{getTitle(contentList?.length)}</h3>
            <div className="content-wrap">
              {contentList?.map((value, index) => (
                <div className="content" key={index}>
                  <p>{value.name}</p>
                  <p>{value.date}</p>
                </div>
              ))}
            </div>
          </div>
        </RecentActivityItemContentStyled>
      )}
    </>
  );
};

const RecentActivityItemContentStyled = styled.div`
  position: relative;
  margin-left: 15px;

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    position: relative;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.BasicBlack};
    margin: 0;

    &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.ShadeGray60};
      border-radius: 50%;
      left: -22px;
      border: 1px solid ${({ theme }) => theme.colors.BasicWhite};
    }
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: ${({ theme }) => theme.colors.ShadeGray50};

      p {
        margin: 0;
      }
    }
  }
`;
