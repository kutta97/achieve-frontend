import React from "react";
import styled from "styled-components";

interface Props {
	className?: string;
	imgSrc?: string;
}

export const ProfileImage: React.FC<Props> = ({ className, imgSrc }) => {
	return (
		<ProfileImageStyled className={className}>

		</ProfileImageStyled>
	)
}

const ProfileImageStyled = styled.div`
  width: 100%;
	padding-top: 100%;
	border-radius: 50%;
	background: #C4C4C4;
`;