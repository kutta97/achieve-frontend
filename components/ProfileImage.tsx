import React from "react";
import styled from "styled-components";

interface Props {
    imgSrc?: string;
}

const ProfileImage: React.FC<Props> = () => {
    return (
        <ProfileImageStyled>

        </ProfileImageStyled>
    )
}

const ProfileImageStyled = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #C4C4C4;
`;