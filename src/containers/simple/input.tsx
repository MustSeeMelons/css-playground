import React from "react";
import "./input.css";

interface ITextInputComponentProps {
  label: string;
  className?: string;
}

const Input: React.FC<ITextInputComponentProps> = (props) => {
  return (
    <div className={`input-container ${props.className}`}>
      <input className="input" id="name-input"></input>
      <label className="input-label" htmlFor="name-input">
        {props.label}
      </label>
    </div>
  );
};

export { Input };
