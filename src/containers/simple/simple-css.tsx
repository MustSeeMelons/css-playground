import React from "react";
import "./simple-css.css";
import { Input } from "./input";
import { Button } from "./button";

const SimpleCss = () => {
  return (
    <div className="simple-css">
      <div className="simple-form">
        <Input className="both-columns name-input" label="name" />
        <Input className="both-columns surname-input" label="surname" />
        <Button clasName="left-button" label="accept" variant="primary" />
        <Button clasName="right-button" label="cancel" variant="secondary" />
        <div className="info-box both-columns"></div>
      </div>
    </div>
  );
};

export { SimpleCss };
