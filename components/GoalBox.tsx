import React from "react";
import styled from "styled-components";

interface Props {
    classNames?: string;
    goalTitle: string;
    remainDays: string;
    duration: string;
    states: string[];
}

export const GoalBox: React.FC<Props> = ({goalTitle, remainDays, duration, classNames = '', states}) => {

    return (
        <GoalBoxTitleStyled className={classNames}>
            <div className="titleWrap">
                <div className="titleLeftWrap">
                    <div className="bullet"/>
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
        </GoalBoxTitleStyled>
    )
}

const GoalBoxTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px 40px;

  background: #FBFAFA;
  border: 1.5px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  .titleWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .titleLeftWrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .bullet {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #C4C4C4;
      }

      .title {
        font-size: 18px;
        margin-left: 9px;
      }
    }
  }

  .boxBottomWrap {
    display: flex;

    .stateWrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: auto;
      gap: 6px;

      .state {
        background: #C4C4C4;
        border-radius: 10px;
        padding: 6px 14px 5px;
        font-size: 11px;
        font-weight: 700;
        height: fit-content;
      }
    }
  }
`