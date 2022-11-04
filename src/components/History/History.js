import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../constants/actions";

export const History = () => {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const handleUndo = () => {
    dispatch({ type: ACTIONS.UNDO });
  };

  const handleKeyClick = (val) => {
    dispatch({ type: ACTIONS.DISPLAY, payload: val });
  }

  return (
    <StyledHistory>
      <HistoryHeader>
        <Back onClick={handleUndo}>⇐</Back>
        <Title>History</Title>
        <Space></Space>
      </HistoryHeader>
      <div>
        {history.map((el, i) => (
          <HistoryEl key={Date.now() + i}>
            <HistoryKey onClick={() => handleKeyClick(el.expression)}>{el.expression}</HistoryKey>
            <span>&nbsp;=&nbsp;</span>
            <HistoryKey onClick={() => handleKeyClick(el.value)}>{el.value}</HistoryKey>
          </HistoryEl>
        ))}
      </div>
    </StyledHistory>
  );
};

const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 570px;
  overflow-y: auto;
`;

const Space = styled.div`
  width: 50px;
`

const Back = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--button-bg);
  color: var(--button-fg);
  transition: background-color .5s, color .5s;

  &:hover {
    background-color: var(--button-bg-active);
  }
`;

const HistoryKey = styled.div`
  background-color: var(--button-bg);
  color: white;
  padding: 2px 6px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .5s, color .5s;

  &:hover {
    background-color: var(--button-bg-active);
  }
`;

const HistoryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  line-height: 48px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: var(--bg-secondary);
  transition: background-color .5s, color .5s;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--result-fg);
  transition: color .5s;
`;

const HistoryEl = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #707070;
  color: var(--button-fg);
  overflow-wrap: anywhere;
  transition: color .5s;

  & * {
    transition: background-color .5s, color .5s;
    color: var(--button-fg);
  }
`;
