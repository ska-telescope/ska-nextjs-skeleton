import React from 'react';

type ButtonProps = Omit<React.ComponentProps<'button'>, 'type'> & {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

const defaultProps: ButtonProps = {
  disabled: false,
  onClick: () => {},
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  className,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
