import React from "react";
import styled from "styled-components";

export default function virtualKeyboard() {
  return (
    <>
      <KeyboardWrap>안녕</KeyboardWrap>
    </>
  );
}

const KeyboardWrap = styled.div`
  background: tomato;
`;
