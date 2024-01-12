import React, { useState } from 'react';
import { Label, Input, Containter, InvalidLabel } from './styles';

import { validateEmail } from 'consts';
interface EmailInputProps {
  onChange: (e: string) => void;
  value: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({ onChange, value }) => {
  const [state, setState] = useState('STATE_NORMAL');

  return (
    <Containter>
      <Label state={state}>
        <InvalidLabel state={state}>Invalid</InvalidLabel>Email Address
      </Label>
      <Input
        state={state}
        value={value}
        onChange={(e) => {
          const temp = e.target.value;
          if (validateEmail(temp)) {
            setState('STATE_EDITED');
            onChange(temp);
          } else {
            setState('STATE_INVALID');
            onChange(temp);
          }
        }}
        onFocus={() => {
          if (state != 'STATE_INVALID') setState('STATE_EDITED');
        }}
        onBlur={(e) => {
          const temp = e.target.value;
          if (temp.length == 0) setState('STATE_NORMAL');
        }}
      ></Input>
    </Containter>
  );
};
