import React from "react";
import styled from "styled-components";

interface Props {
    classNames?: string;
    badgeTitle: string;
    description: string;
    date: string;
}

export const BadgeBox: React.FC<Props> = ({badgeTitle, description, date, classNames= ''}) => {

    return (
        <BadgeBoxTitleStyled className={classNames}>
            <h1 className="title">{badgeTitle}</h1>
            <div className="description">
                <p>{description}</p>
                <p>받은 날짜 : {date}</p>
            </div>
        </BadgeBoxTitleStyled>
    )
}

const BadgeBoxTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 40px;

  background: #FBFAFA;
  border: 1.5px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  .title {
    font-size: 18px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
`