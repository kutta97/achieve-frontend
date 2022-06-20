import React from "react";
import styled from "styled-components";
import { DefaultBox } from "../box/DefaultBox";

interface Props {
  className?: string;
  badgeTitle: string;
  description: string;
  date: string;
}

export const RecentBadgeBox: React.FC<Props> = ({ badgeTitle, description, date, className = '' }) => {

  return (
    <RecentBadgeBoxStyled className={className}>
      <DefaultBox>
        <h2 className="title">{badgeTitle}</h2>
        <div className="description">
          <p>{description}</p>
          <p>받은 날짜 : {date}</p>
        </div>
      </DefaultBox>
    </RecentBadgeBoxStyled>
  )
}

const RecentBadgeBoxStyled = styled.div`
  width: 100%;
  height: 100%;

  .title {
    margin: 0;
    margin-bottom: 14px;
    font-size: 15px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
`