import React from "react";
import styled from "styled-components";
import { RecentGoals } from "../../components/recentGoals/RecentGoals";
import { RecentBadges } from "../../components/recentBadges/RecentBadges";
import { Layout } from "../../components/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout selectedPage="OVERVIEW">
      <HomeFrameStyled>
        <RecentGoals className="recentGoals" />
        <RecentBadges className="recentBadges" />
      </HomeFrameStyled>
    </Layout>
  )
}

const HomeFrameStyled = styled.div`
  .recentBadges {
    margin-top: 60px;
  }
`;

export default Home
