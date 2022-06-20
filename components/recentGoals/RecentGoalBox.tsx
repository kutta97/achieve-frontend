import React from "react";
import styled from "styled-components";
import { DefaultBox } from "../box/DefaultBox";
import { DefaultBoxStates } from "../box/DefaultBoxStates";
import { DefaultBoxTitle } from "../box/DefaultBoxTitle";

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
      <DefaultBox>
        <div className="titleWrap">
          <DefaultBoxTitle title={goalTitle} />
          <p className="day">{remainDays}</p>
        </div>
        <div className="boxBottomWrap">
          <p>{duration}</p>
          <DefaultBoxStates states={states} />
        </div>
      </DefaultBox>
    </RecentGoalBoxStyled>
  )
}

const RecentGoalBoxStyled = styled.div`
  .titleWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    
    .titleLeftWrap {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .boxBottomWrap {
    display: flex;
    justify-content: space-between;
  }
`