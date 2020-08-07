import React from "react";
import "./button.scss";

interface IButtonProps {
  clasName?: string;
  label: string;
  variant: "pre-primary" | "pre-secondary";
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button className={`pre-simple-button ${props.variant} ${props.clasName}`}>
      {props.label}
    </button>
  );
};

export { Button };
