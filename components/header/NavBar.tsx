import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";

interface Props {
	className?: string;
	selected?: string;
}

export const NavBar: React.FC<Props> = ({ className, selected }) => {
	const navLinks = [
		{
			name: "OVERVIEW",
			link: "/home",
		},
		{
			name: "GOALS",
			link: "/goals",
		},
		{
			name: "BADGES",
			link: "/badges",
		},
		{
			name: "FRIENDS",
			link: "/friends",
		},
		{
			name: "GROUPS",
			link: "/groups",
		},
	];

	return (
		<NavBarStyled className={className}>
			{navLinks.map((navLink) => {
				return (
					<NavItem
						className="navItem"
						link={navLink.link}
						selected={(selected === navLink.name) ? true : false}
						key={navLink.name}
					>{navLink.name}</NavItem>
				)
			})}
		</NavBarStyled>
	);
}

const NavBarStyled = styled.div`
	display: flex;
	width: 100%;

	.navItem {
		margin-left: 0;
		margin-right: 30px;
		margin-top: auto;
		margin-bottom: 0;
	}
`;