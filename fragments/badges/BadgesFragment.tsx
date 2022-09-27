import { BadgeItem } from '@components/badges/BadgeItem';
import { Title } from '@components/common/text/Title';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { useBadges } from './hooks/useBadges';

export const BadgesFragment = observer(() => {
  const { badgeList } = useBadges();

  return (
    <GoalsFragmentStyled>
      <div className="top">
        <Title text="You got 5 Badges!" />
      </div>
      <div className="badges-wrap">
        {badgeList?.map((value, index) => (
          <BadgeItem data={value} key={index} />
        ))}
      </div>
    </GoalsFragmentStyled>
  );
});

const GoalsFragmentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .badges-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
`;
