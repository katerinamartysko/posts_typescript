import React from 'react';

interface Options {
  id: string
  value: string
  name: string
}

interface Props {
  options: Array<Options>
  defaultValue: string;
  onChange: (select: string) => void
  value: string;

}

const MySelect = ({ options, defaultValue, onChange, value }: Props) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;
