import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/layout/Layout";

const Friends: React.FC = () => {

  return (
    <Layout selectedPage="FRIENDS">
      <FriendsFrameStyled>
      </FriendsFrameStyled>
    </Layout>
  )
}

const FriendsFrameStyled = styled.div`
`;

export default Friends