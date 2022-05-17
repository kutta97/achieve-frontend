import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  groups: string[];
}

export const ProfileGroups: React.FC<Props> = ({ className, groups }) => {
  return (
    <ProfileGroupsStyled className={className}>
      <h2 className="groupsTitle">GROUPS</h2>
      <div className="groupNamesWrap">
        {groups.map((group, index) => (
          <p className="groupNames" key={index}>{group}</p>
        ))}
      </div>
    </ProfileGroupsStyled>
  );
}

const ProfileGroupsStyled = styled.div`
  .groupsTitle {
    font-size: 18px;
    margin: 0;
  }

  .groupNamesWrap {
    margin-top: 7px;

    .groupNames {
      font-size: 15px;
      margin: 0;
      margin-top: 10px;
    }
  }
`;