import React from "react";
import styled from "styled-components";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";

interface Props {
  classNames?: string;
  examGoal: ExamGoalVO;
}

export const ExamGoalBox: React.FC<Props> = ({ classNames, examGoal }) => {
  return (
    <ExamGoalBoxStyled className={classNames}>
      <div className="titleWrap">
        <div className="titleLeftWrap">
          <div className="bullet" />
          <h1 className="title">
            {`${examGoal.examName} ${examGoal.score} 이상 받는다!`}
          </h1>
          <div className="stateWrap">
            {examGoal.states.map((state, index) => (
              <div className="state" key={index}>
                {state}
              </div>
            ))}
          </div>
        </div>
        <p className="dDay">{examGoal.dDay}</p>
      </div>

      <div className="boxBottomWrap">
        <p>{`${examGoal.startDate} ~ ${examGoal.dueDate}`}</p>
      </div>
    </ExamGoalBoxStyled>
  );
}

const ExamGoalBoxStyled = styled.div`
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

      .stateWrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 9px;
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
  }

  .boxBottomWrap {
    display: flex;
    font-size: 13px;
  }

  p {
    margin: 0;
    font-size: 13px;
  }
`;