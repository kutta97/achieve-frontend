import React from "react";
import styled from "styled-components";
import { SubTitleWithMore } from "../subtitle/SubtitleWithMore";
import { Badge } from "./Badge";
import { RecentBadgeBox } from "./RecentBadgeBox";

interface Props {
  className?: string;
}

export const RecentBadges: React.FC<Props> = ({ className }) => {

  const recentBages = [
    {
      id: 1,
      type: "DIAMOND",
      title: "어치브 1개 달성!",
      description: "목표로 한 시험점수 어치브 1개를 달성했어요.",
      date: "2022.01.17",
    },
    {
      id: 2,
      type: "GOLD",
      title: "어치브 1개 달성!",
      description: "목표로 한 시험점수 어치브 1개를 달성했어요.",
      date: "2022.01.17",
    },
    {
      id: 3,
      type: "SILVER",
      title: "TOEIC 시험 850점 이상 받았다!",
      description: "목표로 한 시험점수 어치브 1개를 달성했어요.",
      date: "2022.01.17",
    },
    {
      id: 4,
      type: "BRONZE",
      title: "해빗 트래커 이틀 연속 지켰다!",
      description: "목표로 한 시험점수 어치브 1개를 달성했어요.",
      date: "2022.01.17",
    },
  ];

  return (
    <RecentBadgesStyled className={className}>

      <SubTitleWithMore className="title" moreLink="/badges">RECENT BADGE ACHIEVED!</SubTitleWithMore>

      <div className="badgeBoxesWrap">
        {recentBages.map((recentBage) => (
          <div className="badgeBoxWrap" key={recentBage.id}>
            <Badge type={recentBage.type} />
            <RecentBadgeBox
              className="badgeBox"
              badgeTitle={recentBage.title}
              description={recentBage.description}
              date={recentBage.date}
            />
          </div>
        ))}
      </div>

    </RecentBadgesStyled>
  );
}

const RecentBadgesStyled = styled.div`
  .title {
    margin-bottom: 17px;
  }

  .badgeBoxesWrap {
    display: flex;
    flex-direction: column;

    .badgeBoxWrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      .badgeBox {
        margin-left: 20px;
      }
    }
  }
`;