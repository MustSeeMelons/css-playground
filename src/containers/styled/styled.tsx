import React from "react";
import styled from "styled-components";
import { Input } from "./input";
import { PrimaryButton, SecondaryButton } from "./styled-button";
import { InfoBox } from "./shared";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: antiquewhite;
  padding: 10px;
`;

const Form = styled.div`
  display: grid;
  width: 350px;
`;

const NameInput = styled(Input)`
  grid-column: 1/3;

  :hover ~ ${InfoBox}::after {
    content: "hello";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

const SurnameInput = styled(Input)`
  grid-column: 1/3;

  :hover ~ ${InfoBox}::after {
    content: "almost done";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

const Primary = styled(PrimaryButton)`
  :hover ~ ${InfoBox}::after {
    content: "click it";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

const Secondary = styled(SecondaryButton)`
  :hover ~ ${InfoBox}::after {
    content: "why even give the option";
    font-weight: bold;
    transition: ease-in-out 0.2s;
  }
`;

const ThisInfoBox = styled(InfoBox)`
  grid-column: 1/3;
`;

const StyledImplementation = () => {
  return (
    <Container>
      <Form>
        <NameInput label="name" />
        <SurnameInput label="surname" />
        <Primary label="accept" />
        <Secondary label="cancel" />
        <ThisInfoBox />
      </Form>
    </Container>
  );
};

export { StyledImplementation };
