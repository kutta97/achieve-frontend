import React from "react";
import styled from "styled-components";

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const SubTitle: React.FC<Props> = ({ className = '', children }) => {
	return (
		<SubtitleStyled className={className}>{children}</SubtitleStyled>
	)
}

const SubtitleStyled = styled.h3`
	margin: 0;
	font-size: 18px;
`;