import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../constants/actions";
import { Container } from "../Container/Container";

export const ControlPanel = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleClick = () => dispatch({ type: ACTIONS.CLEAR_WITH_HISTORY });

  const handleSelect = (e) => {
    dispatch({ type: ACTIONS.THEME, payload: e.target.value });
  };

  const themes = [
    {
      id: 1,
      value: "Light",
    },
    {
      id: 2,
      value: "Dark",
    },
  ];

  return (
    <StyledControlPanel>
      <Container>
        <Title>Settings</Title>
        <Wrapper>
          <Select onChange={handleSelect} value={theme}>
            {themes.map((el) => (
              <option key={el.id}>
                {el.value}
              </option>
            ))}
          </Select>
          <Button onClick={handleClick}>Clear all history</Button>
        </Wrapper>
      </Container>
    </StyledControlPanel>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 32px;
`;

const StyledControlPanel = styled.div`
  display: flex;
  flex-grow: 2;
`;

const Title = styled.div`
  font-size: 36px;
  padding: 60px 0 45px 0;
  font-weight: bold;
  color: var(--result-fg);
  transition: color .5s;
`;

const Select = styled.select`
  width: 240px;
  padding: 12px;
  font-weight: bold;
  color: var(--button-fg);
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: var(--button-bg);
  transition: background-color .5s, color .5s;
`;

const Button = styled.button`
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  background-color: var(--button-bg);
  color: var(--button-fg);
  cursor: pointer;
  transition: background-color .5s, color .5s;

  &:hover {
    background-color: var(--button-bg-active);
  }
`;
