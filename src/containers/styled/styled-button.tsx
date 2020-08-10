import React from "react";
import styled from "styled-components";
import { InfoBox } from "./shared";

const BaseButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  text-transform: lowercase;
  margin: 10px;
  cursor: pointer;
`;

export const PrimaryButtonElement = styled(BaseButton)`
  color: darkolivegreen;
  background-color: khaki;

  :hover {
    color: darkgoldenrod;
    background-color: yellow;
  }

  ${InfoBox} ~ {
    content: "click it";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

export const SecondaryButtonElement = styled(BaseButton)`
  background-color: cornsilk;

  :hover {
    background-color: gold;
  }

  ${InfoBox} ~ {
    content: "why even give the option";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

interface IButtonComponentProps {
  label: string;
}

type ButtonProps = IButtonComponentProps & React.HTMLAttributes<HTMLDivElement>;

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <PrimaryButtonElement className={props.className}>
      {props.label}
    </PrimaryButtonElement>
  );
};

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <SecondaryButtonElement className={props.className}>
      {props.label}
    </SecondaryButtonElement>
  );
};

export { PrimaryButton, SecondaryButton };
