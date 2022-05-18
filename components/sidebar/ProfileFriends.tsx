import React from "react";
import styled from "styled-components";
import { SubTitle } from "../Subtitle/Subtitle";
import { ProfileImage } from "./ProfileImage";

interface Props {
  className?: string;
  friends: string[];
}

export const ProfileFriends: React.FC<Props> = ({ className, friends }) => {
  return (
    <ProfileFriendsStyled className={className}>
      <SubTitle className="title">FRIENDS</SubTitle>
      <div className="friendsWrap">
        {friends.map((friend) => (
          <div className="friendsProfileImages" key={friend}>
            <ProfileImage />
          </div>
        ))}
      </div>
    </ProfileFriendsStyled>
  );
}

const ProfileFriendsStyled = styled.div`
  .title {
    margin-bottom: 13px;
  }

  .friendsWrap {
    display: flex;
    flex-direction: row;
    gap: 5px;

    .friendsProfileImages {
      width: 41px;
      height: 41px;
      gap: 10px;
    }
  }
`;