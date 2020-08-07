import React from "react";
import "./button.css";

interface IButtonProps {
  clasName?: string;
  label: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button className={`simple-button ${props.variant} ${props.clasName}`}>
      {props.label}
    </button>
  );
};

export { Button };
