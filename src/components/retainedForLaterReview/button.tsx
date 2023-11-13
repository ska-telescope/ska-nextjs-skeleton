import React from 'react';

type ButtonProps = Omit<React.ComponentProps<'button'>, 'type'> & {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  title?: string;
};

const defaultProps: ButtonProps = {
  disabled: false,
  onClick: () => {},
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'submit',
  disabled = false,
  children,
  className,
  title = '',
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
      title={title}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
