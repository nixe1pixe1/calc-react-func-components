import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Display = () => {
  const value = useSelector((state) => state.display);
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollLeft = el.current.scrollWidth;
  }, [value])

  return <StyledDisplay ref={el}>{value}</StyledDisplay>;
};

const StyledDisplay = styled.div`
  margin: 0 20px 20px 20px;
  padding: 20px;
  line-height: 36px;
  min-height: 100px;
  font-size: 36px;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-weight: bold;
  background-color: var(--bg-secondary);
  border-radius: 0 0 20px 20px;
  color: var(--result-fg);
  transition: background-color .5s, color .5s;
`;
