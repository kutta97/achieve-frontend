import React from "react";
import styled from "styled-components";
import { GoalBox } from "./GoalBox";
import { SubTitleWithMore } from "../SubtitleWithMore";

interface Props {
  className?: string;
}

export const RecentGoals: React.FC<Props> = ({ className }) => {

  const recentGoals = [
    {
      id: 1,
      title: "소프트웨어 공학 B+ 이상 받는다!",
      remainDays: "D-108",
      duration: "2022.3.2 ~ 2022.6.21",
      states: ["GROUP", "ACHIEVING..."]
    },
    {
      id: 2,
      title: "운전면허시험 합격한다!",
      remainDays: "D-123",
      duration: "2022.3.2 ~ 2022.6.21",
      states: ["GROUP"]
    },
    {
      id: 3,
      title: "TOEIC 시험 853점 받았다!",
      remainDays: "D+123",
      duration: "2021.9.28 ~ 2021.11.31",
      states: ["GROUP"]
    },
    {
      id: 4,
      title: "정보처리기사 합격했다!",
      remainDays: "D+218",
      duration: "2022.3.2 ~ 2022.6.21",
      states: ["GROUP", "ACHIEVING..."]
    },
  ];

  return (
    <RecentGoalsStyled className={className}>

      <SubTitleWithMore className="title" moreLink="/goals">RECENT EXAM GOALS!</SubTitleWithMore>

      <div className="goalBoxesWrap">
        {recentGoals.map((recentGoal) => (
          <GoalBox
            goalTitle={recentGoal.title}
            remainDays={recentGoal.remainDays}
            duration={recentGoal.duration}
            states={recentGoal.states}
            key={recentGoal.id}
          />
        ))}
      </div>

    </RecentGoalsStyled>
  );
}

const RecentGoalsStyled = styled.div`
  .title {
    margin-bottom: 17px;
  }

  .goalBoxesWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;