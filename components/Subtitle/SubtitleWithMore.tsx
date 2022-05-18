import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { SubTitle } from "./Subtitle";

interface Props {
  className?: string;
  children: React.ReactNode;
  moreLink: string;
}

export const SubTitleWithMore: React.FC<Props> = ({ className, children, moreLink }) => {
  return (
    <SubTitleWithMoreStyled className={className}>
      <SubTitle>{children}</SubTitle>
      <Link href={moreLink}>
        <a>more</a>
      </Link>
    </SubTitleWithMoreStyled>
  );
}

const SubTitleWithMoreStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  a {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 5px;
    font-size: 15px;
    font-weight: normal;

    &:hover {
      text-decoration: underline;
    }
  }
`;