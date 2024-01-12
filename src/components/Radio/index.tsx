import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  gap: 20px;
`;

interface Option {
  value: number;
  label: string;
}

interface RadioProps {
  name: string;
  options: Array<Option>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<RadioProps> = ({ name, options, onChange }) => {
  return (
    <Grid>
      {options.map((option: Option, index: number) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </Grid>
  );
};
