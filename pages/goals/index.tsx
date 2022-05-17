import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";

const Goals: React.FC = () => {
	return (
		<GoalsFrameStyled>
			<Header className="header" selected="GOALS" />
		</GoalsFrameStyled>
	)
}

const GoalsFrameStyled = styled.div`
 	display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: absolute;

  .header {
    width: 100%;
    min-height: 120px;
  }
`;

export default Goals