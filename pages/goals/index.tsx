import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Goals: React.FC = () => {

  const [friends] = useState(['1', '2', '3', '4', '5'])
  const [groups] = useState([
    '컴공 3학년 올 A+모임',
    '토익 800점 이상 스터디'
  ])

  return (
    <GoalsFrameStyled>
      <Header className="header" selected="GOALS" />
      <div className="BodyWrap">

        <div className="sidebar">
          <Sidebar nickname="Nickname" profileImage="null" description="hello world! from seoul I wanna be an awsome student." friends={friends} groups={groups} />
        </div>

        <div className="contentsWrap">
        </div>

      </div>
    </GoalsFrameStyled>
  )
}

const GoalsFrameStyled = styled.div`
 	display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: absolute;

  .header {
    width: 100%;
    min-height: 120px;
  }

  .BodyWrap {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 1366px;
    height: 100%;
    margin: auto;
    padding-left: 10%;
    padding-right: 10%;

    .sidebar {
      min-width: 230px;
      height: 100%;
    }

    .contentsWrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      margin-left: 40px;

    }
  }
`;

export default Goals