import React, {useState} from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

interface Props {
    nickname: string;
    description: string;
    friends: string[];
    groups: string[];
}

export const ProfilePanel: React.FC<Props> = ({nickname, description, friends, groups}) => {

    return (
        <ProfilePanelStyled>
            <div className="profileImageWrap">
                <ProfileImage />
            </div>

            <div className="profileDescriptionWrap">
                <h1 className="nickname">{nickname}</h1>
                <p className="description">{description}</p>
            </div>

            <div className="profileFriendsWrap">
                <h2 className="friendsTitle">FRIENDS</h2>
                <div className="friendsWrap">
                    {friends.map((friend) => (
                        <div className="friendsProfileImages" key={friend}>
                            <ProfileImage />       
                        </div>
                    ))}
                </div>
            </div>

            <div className="profileGroupsWrap">
                <h2 className="groupsTitle">GROUPS</h2>
                <div className="groupNamesWrap">
                    {groups.map((group, index) => (
                        <p className="groupNames" key={index}>{group}</p>
                    ))}
                </div>
            </div>
        </ProfilePanelStyled>
    )
}

const ProfilePanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    .profileImageWrap {
        width: 270px;
        height: 270px;    
    }

    .profileDescriptionWrap {

        .nickname {
            font-size: 36px;
            margin: 0;
            margin-top: 40px;
        }
        .description {
            font-size: 18px;
            margin: 0;
            margin-top: 17px;
        }
    }

    .profileFriendsWrap {
        margin-top: 50px;

        .friendsTitle {
            font-size: 24px;
            margin: 0;
        }
        .friendsWrap {
            display: flex;
            flex-direction: row;
            gap: 10px;
            margin-top: 17px;
        
            .friendsProfileImages {
                width: 50px;
                height: 50px;
                gap: 10px;
            }
        }
    }

    .profileGroupsWrap {
        margin-top: 36px;

        .groupsTitle {
            font-size: 24px;
            margin: 0;
        }

        .groupNamesWrap {
            margin-top: 5px;

            .groupNames {
                font-size: 18px;
                margin: 0;
                margin-top: 12px;
            }
        }
    }
`;