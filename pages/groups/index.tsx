import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/layout/Layout";

const Groups: React.FC = () => {
  return (
    <Layout selectedPage="GROUPS">
      <GroupsFrameStyled>
      </GroupsFrameStyled>
    </Layout>
  )
}

const GroupsFrameStyled = styled.div`
`;

export default Groups