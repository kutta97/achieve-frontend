import React, { useState } from "react";
import styled from "styled-components";
import { Badge } from "../../components/Badge";
import { BadgeBox } from "../../components/BadgeBox";
import { GoalBox } from "../../components/GoalBox";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SubTitle } from "../../components/Subtitle";

const Home: React.FC = () => {

  const [friends] = useState(['1', '2', '3', '4', '5'])
  const [groups] = useState([
    '컴공 3학년 올 A+모임',
    '토익 800점 이상 스터디'
  ])

  return (
    <HomeFrameStyled>
      <Header className="header" selected="OVERVIEW" />
      <div className="homeBodyWrap">
        <div className="sidebar">
          <Sidebar nickname="Nickname" profileImage="null" description="hello world! from seoul I wanna be an awsome student." friends={friends} groups={groups} />
        </div>
        <div className="rightContentsWrap">

          <div className="examGoalsWrap">
            <div className="subTitle">
              <SubTitle>RECENT EXAM GOALS!</SubTitle>
              <p>more</p>
            </div>
            <div className="goalBoxesWrap">
              <GoalBox
                goalTitle="소프트웨어 공학 B+ 이상 받는다!"
                remainDays="D-108"
                duration="2022.3.2 ~ 2022.6.21"
                states={[
                  "GROUP", "ACHIEVING..."
                ]}
              />
              <GoalBox
                goalTitle="운전면허시험 합격한다!"
                remainDays="D-123"
                duration="2022.3.2 ~ 2022.6.21"
                states={[
                  "ACHIEVING..."
                ]}
              />
              <GoalBox
                goalTitle="TOEIC 시험 853점 받았다!"
                remainDays="D-186"
                duration="2021.9.28 ~ 2021.11.31"
                states={[
                  "ACHIEVING..."
                ]}
              />
              <GoalBox
                goalTitle="정보처리기사 합격했다!"
                remainDays="D+218"
                duration="2022.3.8 ~ 2022.7.3"
                states={[
                  "GROUP", "ACHIEVING..."
                ]}
              />
            </div>
          </div>

          <div className="badgeAchievedWrap">
            <div className="subTitle">
              <SubTitle>RECENT BADGE ACHIEVED!</SubTitle>
              <p>more</p>
            </div>
            <div>
              <div className="badgeBoxesWrap">
                <Badge type="DIAMOND" />
                <BadgeBox
                  classNames="badgeBox"
                  badgeTitle="어치브 1개 달성!"
                  description="목표로 한 시험점수 어치브 1개를 달성했어요."
                  date="2022.01.17"
                />
              </div>
              <div className="badgeBoxesWrap">
                <Badge type="DIAMOND" />
                <BadgeBox
                  classNames="badgeBox"
                  badgeTitle="어치브 1개 달성!"
                  description="목표로 한 시험점수 어치브 1개를 달성했어요."
                  date="2022.01.17"
                />
              </div>
              <div className="badgeBoxesWrap">
                <Badge type="DIAMOND" />
                <BadgeBox
                  classNames="badgeBox"
                  badgeTitle="어치브 1개 달성!"
                  description="목표로 한 시험점수 어치브 1개를 달성했어요."
                  date="2022.01.17"
                />
              </div>
              <div className="badgeBoxesWrap">
                <Badge type="DIAMOND" />
                <BadgeBox
                  classNames="badgeBox"
                  badgeTitle="어치브 1개 달성!"
                  description="목표로 한 시험점수 어치브 1개를 달성했어요."
                  date="2022.01.17"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeFrameStyled>
  )
}

const HomeFrameStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: absolute;

  .header {
    width: 100%;
    min-height: 120px;
  }

  .homeBodyWrap {
    position: relative;
    width: 1080px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;

    .sidebar {
      min-width: 230px;
      height: 100%;
      margin-left: 20px;
    }

    .rightContentsWrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      margin-left: 40px;
      margin-right: 20px;

      .examGoalsWrap {

        .goalBoxesWrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

      }

      .badgeAchievedWrap {
        margin-top: 30px;

        .badgeBoxesWrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .badgeBox {
          margin-left: 35px;
        }
      }

      .subTitle {
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        p {
          margin-top: auto;
          margin-bottom: auto;
          font-size: 15px;
        }
      }
    }
  }
`;

export default Home
