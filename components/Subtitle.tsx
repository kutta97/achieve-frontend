import React from "react";
import styled from "styled-components";

interface Props {
    classNames?: string;
    children: React.ReactNode;
}

export const SubTitle: React.FC<Props> = ({classNames = '', children}) => {
    return (
        <SubtitleStyled className={classNames}>{children}</SubtitleStyled>
    )
}

const SubtitleStyled = styled.h3`

`;