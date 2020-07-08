import React from "react";

interface UIProps {
  className?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input = React.memo((props: UIProps) => {
  const { className, type, value, onChange, placeholder, style } = props;
  return (
    <input
      className={className ?? className}
      type={type ? type : "text"}
      placeholder={placeholder ?? placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
        onChange(e.target.value)
      }
      style={style ?? style}
    />
  );
});

export default Input;
