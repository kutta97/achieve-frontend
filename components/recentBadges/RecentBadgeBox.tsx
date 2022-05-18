import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  badgeTitle: string;
  description: string;
  date: string;
}

export const RecentBadgeBox: React.FC<Props> = ({ badgeTitle, description, date, className = '' }) => {

  return (
    <RecentBadgeBoxStyled className={className}>
      <h2 className="title">{badgeTitle}</h2>
      <div className="description">
        <p>{description}</p>
        <p>받은 날짜 : {date}</p>
      </div>
    </RecentBadgeBoxStyled>
  )
}

const RecentBadgeBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 40px;

  background: #FBFAFA;
  border: 1.5px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  .title {
    margin: 0;
    margin-bottom: 14px;
    font-size: 15px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    font-size: 15px;

    p {
      margin: 0;
    }
  }
`