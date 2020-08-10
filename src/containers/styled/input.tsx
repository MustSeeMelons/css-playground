import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 10px;
`;

const LabelElement = styled.label`
  position: absolute;
  top: 22px;
  left: 20px;
`;

const InputElement = styled.input`
  padding: 23px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;

  :focus + ${LabelElement} {
    color: crimson;
    transition: ease-in-out 0.3s;
    top: 3px;
    left: 23px;
    font-size: 14px;
    font-weight: 600;
  }
`;

interface ITextInputComponentProps {
  label: string;
}

type TextInputProps = ITextInputComponentProps &
  React.HTMLAttributes<HTMLDivElement>;

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <Container className={props.className}>
      <InputElement id={`styled-${props.label}`}></InputElement>
      <LabelElement htmlFor={`pre-${props.label}`}>{props.label}</LabelElement>
    </Container>
  );
};

export { Input };
