import React from "react";

type FormErrorProps = Omit<React.ComponentProps<"label">, "type"> & {
  value?: string;
  className?: string;
};

const defaultProps: FormErrorProps = {
  value: "",
  className: "",
};

const FormError: React.FC<FormErrorProps> = ({
  value,
  className,
}: FormErrorProps) => {
  if (value) {
    return (
      <label className="label">
        <span className={className}>{value}</span>
      </label>
    );
  }
  return null;
};

FormError.defaultProps = defaultProps;

export default FormError;
