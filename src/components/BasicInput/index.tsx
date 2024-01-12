import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
interface BasicInputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  type?: string;
}

export const BasicInput: React.FC<BasicInputProps> = (props) => {
  const [state, setState] = useState(
    !props.value.length ? 'STATE_NORMAL' : 'STATE_VALUED'
  );

  return (
    <Container>
      <Label state={state}>{props.label}</Label>
      <Input
        type={props.type}
        state={state}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setState('STATE_EDITED')}
        onBlur={(e) => {
          if (e.target.value == '') setState('STATE_NORMAL');
        }}
      ></Input>
    </Container>
  );
};
