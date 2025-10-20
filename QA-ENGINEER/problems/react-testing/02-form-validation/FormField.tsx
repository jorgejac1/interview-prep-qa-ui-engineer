import React, { useState } from 'react';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  validators?: Array<(value: string) => string | null>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label, value, onChange, validators = []
}) => {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    for (const validator of validators) {
      const err = validator(value);
      if (err) {
        setError(err);
        return;
      }
    }
    setError(null);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={touched && error ? 'true' : 'false'}
      />
      {touched && error && <span role="alert">{error}</span>}
    </div>
  );
};
