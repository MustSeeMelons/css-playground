import React from "react";
import { SimpleCss } from "./containers/simple/simple-css";
import { ModuleCss } from "./containers/module/module-css";

const Root = () => {
  return (
    <div>
      <SimpleCss />
      <ModuleCss />
    </div>
  );
};

export { Root };
