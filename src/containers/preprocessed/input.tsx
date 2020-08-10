import React from "react";
import "./input.scss";

interface ITextInputComponentProps {
  label: string;
  className?: string;
}

const Input: React.FC<ITextInputComponentProps> = (props) => {
  return (
    <div className={`pre-input-container ${props.className}`}>
      <input className="pre-input" id={props.label}></input>
      <label className="pre-input-label" htmlFor={props.label}>
        {props.label}
      </label>
    </div>
  );
};

export { Input };
