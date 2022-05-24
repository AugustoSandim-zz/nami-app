import { FC, InputHTMLAttributes } from "react";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  name?: string;
  children?: React.ReactNode;
  onClick: Function;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
