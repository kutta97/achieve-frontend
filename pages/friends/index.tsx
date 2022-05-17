import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";

const Friends: React.FC = () => {
	return (
		<FriendsFrameStyled>
			<Header className="header" selected="FRIENDS" />
		</FriendsFrameStyled>
	)
}

const FriendsFrameStyled = styled.div`
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

export default Friends