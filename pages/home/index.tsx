import React, {useState} from "react";
import styled from "styled-components";
import { ProfilePanel } from "../components/ProfilePanel";

const Home: React.FC = () => {

  const [friends] = useState(['1', '2', '3', '4'])
  const [groups] = useState([
      '컴공 3학년 올 A+모임',
      '토익 800점 이상 스터디'
  ])
  
  return (
    <HomeFrameStyled>
      <div className="homeTop"></div>
      <div className="homeBodyWrap">
        <div className="leftPanelWrap">
          <ProfilePanel nickname="Nickname" description="hello world! from seoul I wanna be an awsome student." friends={friends} groups={groups}/>
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

  .homeTop {
    width: 100%;
    min-height: 140px;
    background: #929292;
  }

  .homeBodyWrap {
    position: relative;
    width: 1370px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;

    .leftPanelWrap {
      position: absolute;
      top: -37px;
      min-width: 300px;
      height: 100%;
    }

    .rightContentsWrap {
      width: 100%;
      display: flex;
      flex-direction: column;

      .examGoalsWrap {

        .goalBoxesWrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

      }

      .bedgeAchievedWrap {

        .bedgeBoxesWrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .bedgeBox {
          margin-left: 40px;
        }
      }
    }
  }
`;

export default Home
