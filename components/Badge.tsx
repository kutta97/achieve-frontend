import React, { useState } from "react";
import styled from "styled-components";
import badgeImage from '../assets/Badge.png';

interface Props {
	type: "DIAMOND" | "GOLD" | "SILVER";
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
  position: relative;
  text-align: center;
  justify-content: center;
  color: white;
  align-items: center;
  min-width: 100px;
  height: 127px;
  display: flex;
  
  .text {
    position: absolute;
    color: white;
    font-size: 18px;
    top: 45px;
  }
`