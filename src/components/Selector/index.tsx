import React from 'react';
import { Flex, Label, Option, Input } from './styles';

type SelectorProps = {
  label: string;
  options: string[];
};

export const Selector: React.FC<SelectorProps> = ({ label, options }) => {
  return (
    <Flex>
      <Label>{label}</Label>
      <Input list={label} name="sort" id="sort" placeholder={label + '...'} />
      <datalist id={label}>
        {options.map((option) => (
          <Option value={option} key={option} />
        ))}
      </datalist>
    </Flex>
  );
};
