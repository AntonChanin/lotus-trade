import React, { ChangeEventHandler, FC } from 'react';

type Props = {
  label: string;
  callback?(value: string): void;
  className?: string;
}

const TenderInput: FC<Props> = (props) => {
  const { label, callback, className } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    callback?.(event.target.value);
  }

  return (
    <div className={className}>
      <label>{label}</label>
      <input className="h-6 outline outline-offset-1 outline-cyan-500" onChange={handleChange} />
    </div>
  );
};

export default TenderInput;
