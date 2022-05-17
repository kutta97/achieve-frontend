import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

interface Props {
  className?: string;
  friends: string[];
}

export const ProfileFriends: React.FC<Props> = ({ className, friends }) => {
  return (
    <ProfileFriendsStyled className={className}>
      <h2 className="friendsTitle">FRIENDS</h2>
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
  .friendsTitle {
    font-size: 18px;
    margin: 0;
  }
  .friendsWrap {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-top: 17px;

    .friendsProfileImages {
      width: 41px;
      height: 41px;
      gap: 10px;
    }
  }
`;