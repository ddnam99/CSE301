import React from "react";

interface UIProps {
  id?: string;
  name?: string;
  className?: string;
  autoComplete?: string;
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
    autoComplete,
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
      autoComplete={autoComplete ?? autoComplete}
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
