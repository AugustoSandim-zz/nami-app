import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type="text"
      data-testid="InputText"
      onChange={onChange}
      value={value}
    />
  );
};

export default InputText;
