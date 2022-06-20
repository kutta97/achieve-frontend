import React from "react";
import styled from "styled-components";
import { ExamGoalVO } from "../../vo/goals/examGoalVO";
import { DefaultBox } from "../box/DefaultBox";
import { DefaultBoxStates } from "../box/DefaultBoxStates";
import { DefaultBoxTitle } from "../box/DefaultBoxTitle";

interface Props {
  classNames?: string;
  examGoal: ExamGoalVO;
}

export const ExamGoalBox: React.FC<Props> = ({ classNames, examGoal }) => {
  return (
    <ExamGoalBoxStyled className={classNames}>
      <DefaultBox>
        <div className="titleWrap">
          <div className="titleLeftWrap">
            <DefaultBoxTitle title={`${examGoal.examName} ${examGoal.score} 이상 받는다!`} />
            <DefaultBoxStates classNames="states" states={examGoal.states} />
          </div>
          <p className="dDay">{examGoal.dDay}</p>
        </div>

        <div className="boxBottomWrap">
          <p>{`${examGoal.startDate} ~ ${examGoal.dueDate}`}</p>
        </div>
      </DefaultBox>
    </ExamGoalBoxStyled>
  );
}

const ExamGoalBoxStyled = styled.div`
  .titleWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    
    .titleLeftWrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .states {
        margin-left: 9px;
      }
    }
  }

  .boxBottomWrap {
    display: flex;
    flex-direction: row;
  }
`;