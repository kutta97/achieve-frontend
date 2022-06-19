import React from "react";
import styled from "styled-components";
import { ScoreType } from "../../vo/goals/examGoalVO";
import { InputWrap } from "./InputWrap";

interface Props {
  classNames?: string;
  scoreType: ScoreType;
  score: string;
  onChangeScoreType: (scoreType: ScoreType) => void;
  onChangeScore: (score: string) => void;
}

export const ScoreInput: React.FC<Props> = ({
  classNames,
  scoreType,
  score,
  onChangeScoreType,
  onChangeScore
}) => {

  const handleChangeScoreType = e => {
    onChangeScoreType(e.target.value);
    e.target.value === 'NUMBER' && onChangeScore('100');
    e.target.value === 'LETTER' && onChangeScore('A+');
    e.target.value === 'PERCENTAGE' && onChangeScore('90');
  }

  const handleChangeScore = e => {
    onChangeScore(e.target.value.toString());
  }

  return (
    <ScoreInputStyled className={classNames}>
      <InputWrap title="Score type">
        <select name="scoreType" value={scoreType} onChange={handleChangeScoreType}>
          <option value='NUMBER'>number grade</option>
          <option value='LETTER'>letter grade</option>
          <option value='PERCENTAGE'>percentile grade</option>
        </select>
      </InputWrap>
      <InputWrap title="Score">
        {scoreType === 'NUMBER' &&
          <div className="scoreInput">
            <input
              type="number"
              min="0"
              pattern="[0-9]*"
              inputMode="numeric"
              value={+score}
              onChange={handleChangeScore}
            />
            점 이상 받을 것이다!
          </div>}
        {scoreType === 'LETTER' &&
          <div className="scoreInput">
            <select className="letterInput" name="score" value={score} onChange={handleChangeScore}>
              <option value='A+'>A+</option>
              <option value='A0'>A0</option>
              <option value='B+'>B+</option>
              <option value='B0'>B0</option>
              <option value='C+'>C+</option>
              <option value='C0'>C0</option>
            </select>
            이상 받을 것이다!
          </div>}
        {scoreType === 'PERCENTAGE' &&
          <div className="scoreInput">
            <input
              type="number"
              min="0"
              max="100"
              pattern="[0-9]*"
              inputMode="numeric"
              value={+score}
              onChange={handleChangeScore}
            />
            % 이상 안에 들 것이다!
          </div>}
      </InputWrap>
    </ScoreInputStyled >
  );
}

const ScoreInputStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  gap: 25px;

  select {
    width: 100%;
    font-size: 17px;
    padding: 10px 20px;
    background: #FFFFFF;
    border: 1.5px solid #C4C4C4;
    border-radius: 10px;
  }

  input {
    width: 100px;
    font-size: 18px;
    padding: 10px 20px;
    background: #FFFFFF;
    border: 1.5px solid #C4C4C4;
    border-radius: 10px;
  }

  .scoreInput {
    display: flex;
    flex-direction: row;
    gap:10px;
    font-size :15px ;
    align-items: center;
  }

  .letterInput {
    width: 100px;
  }

`;