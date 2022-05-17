import React, { useState } from "react";
import styled from "styled-components";
import badgeImage from '../../assets/Badge.svg';

interface Props {
	type: string;
}

export const Badge: React.FC<Props> = ({ type }) => {

	const [info] = useState(() => {
		switch (type) {
			case "DIAMOND":
				return {
					name: "DIAMOND",
					color: '#f00'
				};
			case "GOLD":
				return {
					name: "GOLD",
					color: '#0F0'
				};
			case "SILVER":
				return {
					name: "SILVER",
					color: '#00F'
				};
			case "BRONZE":
				return {
					name: "BRONZE",
					color: '#ffa600'
				};
		}
		return {
			name: '',
			color: 'gray'
		};
	})

	return (
		<BadgeStyled>
			<img src={badgeImage.src} />
			<div className="text">
				{info.name}
			</div>
		</BadgeStyled>
	);
}

const BadgeStyled = styled.div`
	display: flex;
	justify-content: center;
  position: relative;
	color: white;
  text-align: center;
  align-items: center;
  min-width: 85px;
  height: 115px;
  
  .text {
    position: absolute;
    color: white;
    font-size: 15px;
		font-weight: bold;
    top: 40px;
  }
`