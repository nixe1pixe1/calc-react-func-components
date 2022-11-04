import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../constants/actions";
import { desktopButtons, mobileButtons } from "../../utils/buttons";

export const Keypad = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const keypad = useSelector((state) => state.keypad);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleClick = (button) => {
    const res = keypad.executeAction(button.action);

    if (typeof res === "string")
      return dispatch({ type: ACTIONS.DISPLAY, payload: res });

    return dispatch({ type: ACTIONS[res.action] });
  };

  return (
    <StyledKeypad>
      {width <= 840 ? (
        <>
          {mobileButtons.map((button) => (
            <Button key={button.id} onClick={() => handleClick(button)}>
              {button.text}
            </Button>
          ))}
        </>
      ) : (
        <>
          {desktopButtons.map((button) => (
            <Button key={button.id} onClick={() => handleClick(button)}>
              {button.text}
            </Button>
          ))}
        </>
      )}
    </StyledKeypad>
  );
};

const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 40px;
  column-gap: 2px;
  margin: 20px;

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Button = styled.button`
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  min-width: 60px;
  border-radius: 50%;
  border: none;
  font-size: 36px;
  transition: height 0.5s, width 0.5s, background-color 0.5s, font-size 0.5s,
    border-radius 0.5s, color .5s;
  background-color: var(--button-bg);
  color: var(--button-fg);
  cursor: pointer;

  &:active {
    border-radius: 20px;
    background-color: var(--button-bg-active);
  }

  @media screen and (max-width: 405px) {
    height: 60px;
    width: 60px;
    font-size: 24px;
  }
`;
