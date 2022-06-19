import React from "react";
import styled from "styled-components";
import { RecentGoals } from "../../components/recentGoals/RecentGoals";
import { RecentBadges } from "../../components/recentBadges/RecentBadges";

const Home: React.FC = () => {
  return (
    <HomeFrameStyled>
      <RecentGoals className="recentGoals" />
      <RecentBadges className="recentBadges" />
    </HomeFrameStyled>
  )
}

const HomeFrameStyled = styled.div`
  .recentBadges {
    margin-top: 60px;
  }
`;

export default Home
