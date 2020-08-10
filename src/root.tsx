import React from "react";
import { VanillaImplementation } from "./containers/simple/vanilla";
import { PreProcessedImplementation } from "./containers/preprocessed/preprocessed";
import { StyledImplementation } from "./containers/styled/styled";

const Root = () => {
  return (
    <div>
      <VanillaImplementation />
      <PreProcessedImplementation />
      <StyledImplementation />
    </div>
  );
};

export { Root };
