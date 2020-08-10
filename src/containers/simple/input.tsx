import React from "react";
import "./input.css";

interface ITextInputComponentProps {
  label: string;
  className?: string;
}

const Input: React.FC<ITextInputComponentProps> = (props) => {
  return (
    <div className={`input-container ${props.className}`}>
      <input className="input" id={`pre-${props.label}`}></input>
      <label className="input-label" htmlFor={`pre-${props.label}`}>
        {props.label}
      </label>
    </div>
  );
};

export { Input };
