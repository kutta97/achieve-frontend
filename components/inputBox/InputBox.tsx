import React from "react";
import styled from "styled-components";
import { DefaultBox } from "../box/DefaultBox";

interface Props {
  classNames?: string;
  children: React.ReactNode;
  onCreateClick?: () => void;
  onCloseClick?: () => void;
}

export const InputBox: React.FC<Props> = ({ classNames, children, onCreateClick, onCloseClick }) => {

  const handleCreateClick = () => {
    onCreateClick?.();
  }

  const handleCloseClick = () => {
    onCloseClick?.();
  }

  return (
    <InputBoxStyled className={classNames}>
      <DefaultBox>
        <button
          className="closeButton"
          onClick={handleCloseClick}
        >
        </button>
        {children}
        <button
          className="createButton"
          onClick={handleCreateClick}
        >
          create
        </button>
      </DefaultBox>
    </InputBoxStyled>
  );
}

const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;

  .closeButton{
    width:20px;
    height:20px;
    position:relative;
    text-indent:-9999px;
    border: none;
    background-color:transparent;
    margin-left: auto;
    cursor: pointer;
    
    &:before,&:after{
    content:'';
    width:25px;
    height:1px;
    position:absolute;
    left:50%;
    top:50%;
    border-radius:4px;
    background:#000
  }
  &:before{
    transform:translate(-50%,-50%) rotate(-45deg)
  }
  &:after{
    transform:translate(-50%,-50%) rotate(45deg)
  }
  }

  .createButton {
    margin-left: auto;
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
    padding: 5px 15px;
    background: #4B4B4B;
    border-radius: 10px;
    border: 0;
    cursor: pointer;

    &:hover {
      background: #929292;
    }
  }
`;