import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";

const Badges: React.FC = () => {

	const [friends] = useState(['1', '2', '3', '4'])
	const [groups] = useState([
		'컴공 3학년 올 A+모임',
		'토익 800점 이상 스터디'
	])

	return (
		<BadgesFrameStyled>
			<Header className="header" selected="BADGES" />
		</BadgesFrameStyled>
	)
}

const BadgesFrameStyled = styled.div`
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

export default Badges