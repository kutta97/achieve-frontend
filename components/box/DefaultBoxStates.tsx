import React from "react";
import styled from "styled-components";

interface Props {
  classNames?: string;
  states: any[];
}

export const DefaultBoxStates: React.FC<Props> = ({ classNames, states }) => {
  return (
    <DefaultBoxStatesStyled className={classNames}>
      {states.map((state, index) => (
        <div className="state" key={index}>
          {state}
        </div>
      ))}
    </DefaultBoxStatesStyled>
  );
}

const DefaultBoxStatesStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  .state {
    background: #C4C4C4;
    border-radius: 10px;
    padding: 3px 8px 3px;
    font-size: 10px;
    font-weight: 700;
    height: fit-content;
  }
`;