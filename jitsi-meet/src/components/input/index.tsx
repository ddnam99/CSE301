import React from "react";

interface UIProps {
  id?: string;
  name?: string;
  className?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input = React.memo((props: UIProps) => {
  const {
    id,
    name,
    className,
    type,
    value,
    onChange,
    placeholder,
    style,
  } = props;
  
  return (
    <input
      id={id ?? id}
      name={name ?? name}
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
