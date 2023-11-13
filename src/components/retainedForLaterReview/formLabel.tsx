import React from 'react';

type FormLabelProps = Omit<React.ComponentProps<'label'>, 'type'> & {
  className?: string;
  value?: string;
};

const defaultProps: FormLabelProps = {
  className: '',
  value: '',
};

const FormLabel: React.FC<FormLabelProps> = ({
  className,
  value,
}: FormLabelProps) => {
  return (
    <label className="label">
      <span className={className}>{value}</span>
    </label>
  );
};

FormLabel.defaultProps = defaultProps;

export default FormLabel;
