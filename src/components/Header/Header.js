import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ACTIONS } from "../../constants/actions";
import { Container } from "../Container/Container";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  console.log(theme);

  const toggleTheme = () =>
    theme === "Light"
      ? dispatch({ type: ACTIONS.THEME, payload: "Dark" })
      : dispatch({ type: ACTIONS.THEME, payload: "Light" });

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Link className={"title"} to={"/"} end>
            Calculator
          </Link>
          <RightSide>
            <Button onClick={toggleTheme}>{theme}</Button>
            <Links>
              <Link to={"/"} end>
                Home
              </Link>
              <Link to={"/settings"} end>
                Settings
              </Link>
            </Links>
          </RightSide>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};

const Button = styled.div`
  width: 80px;
  background-color: var(--button-bg);
  border-radius: 20px;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: var(--button-fg);
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: var(--button-bg-active);
  }
`;

const StyledHeader = styled.div`
  background-color: #434343;
  height: 11vh;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active:not(.title) {
    text-decoration: underline;
  }

  &.title {
    font-size: 24px;
  }
`;
