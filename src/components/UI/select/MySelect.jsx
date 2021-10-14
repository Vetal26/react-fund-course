/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line object-curly-newline
const MySelect = ({ options, defaultValue, value, onChange }) => (
  <select value={value} onChange={(event) => onChange(event.target.value)}>
    <option disabled value="">
      {defaultValue}
    </option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

export default MySelect;
