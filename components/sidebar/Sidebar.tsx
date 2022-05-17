import React from "react";
import styled from "styled-components";
import { Profile } from "./Profile";
import { ProfileFriends } from "./ProfileFriends";
import { ProfileGroups } from "./ProfileGroups";

interface Props {
  className?: string;
  nickname: string;
  profileImage: string;
  description: string;
  friends: string[];
  groups: string[];
}

export const Sidebar: React.FC<Props> = (
  {
    className,
    nickname,
    profileImage,
    description,
    friends,
    groups
  }) => {
  return (
    <SidebarStyled className={className}>
      <div className="sidebarWrap">
        < Profile
          className="profile"
          nickname={nickname}
          profileImage={profileImage}
          description={description}
        />
        <ProfileFriends
          className="profileFriends"
          friends={friends}
        />
        <ProfileGroups
          className="profileGroups"
          groups={groups}
        />
      </div >
    </SidebarStyled >
  );
}

const SidebarStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .sidebarWrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -35px;

    .profile {
      width: 100%;
    }

    .profileFriends {
      width: 100%;
      margin-top: 45px;
    }

    .profileGroups {
      width: 100%;
      margin-top: 30px;
    }
  }
`;