import React from "react";
import styled from "styled-components";
import { SubTitle } from "../subtitle/Subtitle";

interface Props {
  className?: string;
  groups: string[];
}

export const ProfileGroups: React.FC<Props> = ({ className, groups }) => {
  return (
    <ProfileGroupsStyled className={className}>
      <SubTitle className="title">GROUPS</SubTitle>
      <div className="groupNamesWrap">
        {groups.map((group, index) => (
          <p className="groupNames" key={index}>{group}</p>
        ))}
      </div>
    </ProfileGroupsStyled>
  );
}

const ProfileGroupsStyled = styled.div`
  .title {
    margin-bottom: 13px;
  }

  .groupNamesWrap {

    .groupNames {
      font-size: 15px;
      margin: 0;
      margin-top: 10px;
    }
  }
`;