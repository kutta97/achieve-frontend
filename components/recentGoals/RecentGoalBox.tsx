import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
  goalTitle: string;
  remainDays: string;
  duration: string;
  states: string[];
}

export const RecentGoalBox: React.FC<Props> = ({ goalTitle, remainDays, duration, classNames = '', states }) => {

  return (
    <RecentGoalBoxStyled className={classNames}>
      <div className="titleWrap">
        <div className="titleLeftWrap">
          <div className="bullet" />
          <h1 className="title">{goalTitle}</h1>
        </div>
        <p className="day">{remainDays}</p>
      </div>
      <div className="boxBottomWrap">
        <p>{duration}</p>
        <div className="stateWrap">
          {states.map((state, index) => (
            <div className="state" key={index}>
              {state}
            </div>
          ))}
        </div>
      </div>
    </RecentGoalBoxStyled>
  )
}

const RecentGoalBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 40px;

  background: #FBFAFA;
  border: 1.5px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  .titleWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    
    .titleLeftWrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .bullet {
        width: 10px;
        height: 10px;
        border-radius: 6px;
        background: #C4C4C4;
      }

      .title {
        font-size: 15px;
        margin-left: 9px;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }

  .boxBottomWrap {
    display: flex;
    font-size: 13px;

    .stateWrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: auto;
      gap: 5px;

      .state {
        background: #C4C4C4;
        border-radius: 10px;
        padding: 3px 8px 3px;
        font-size: 10px;
        font-weight: 700;
        height: fit-content;
      }
    }
  }

  p {
    margin: 0;
    font-size: 13px;
  }
`