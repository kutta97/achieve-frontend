import React, { useState } from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

interface Props {
	className?: string;
	nickname: string;
	profileImage: string;
	description: string;
}

export const Profile: React.FC<Props> = ({ className, nickname, profileImage, description }) => {

	return (
		<ProfileStyled className={className}>
			<div className="profileImageWrap">
				<ProfileImage imgSrc={profileImage} />
			</div>

			<div className="profileDescriptionWrap">
				<h1 className="nickname">{nickname}</h1>
				<p className="description">{description}</p>
			</div>
		</ProfileStyled>
	)
}

const ProfileStyled = styled.div`

		.profileImageWrap {
			width: 100%;
		}
			
		.profileDescriptionWrap {
			.nickname {
				font-size: 26px;
				margin: 0;
				margin-top: 30px;
			}
			.description {
				font-size: 15px;
				margin: 0;
				margin-top: 15px;
			}
		}
`;