import React from "react";
import "./preprocessed.scss";
import { Input } from "./input";
import { Button } from "./button";

const PreProcessedImplementation = () => {
  return (
    <div className="preprocessed">
      <div className="pre-form">
        <Input className="pre-both-columns pre-name-input" label="name" />
        <Input className="pre-both-columns pre-surname-input" label="surname" />
        <Button
          clasName="pre-left-button"
          label="accept"
          variant="pre-primary"
        />
        <Button
          clasName="pre-right-button"
          label="cancel"
          variant="pre-secondary"
        />
        <div className="pre-info-box pre-both-columns"></div>
      </div>
    </div>
  );
};

export { PreProcessedImplementation };
