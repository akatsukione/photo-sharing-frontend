import React, { useState } from 'react';
import { Label, Input, Container, InvalidLabel } from './styles';
import { validatePassword } from 'consts';
import { IconButton } from 'components';

interface PasswordInputProps {
  value: string;
  onChange: (e: string) => void;
  label: string;
  isValidatable: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  label,
  isValidatable,
}) => {
  const [state, setState] = useState('STATE_NORMAL');
  const [inputType, setInputType] = useState('password');

  return (
    <Container>
      <Label state={state}>
        <InvalidLabel state={state}>Weak</InvalidLabel>
        {label}
      </Label>
      <Input
        value={value}
        type={inputType}
        state={state}
        onChange={(e) => {
          const temp = e.target.value;
          if (isValidatable == true) {
            if (validatePassword(temp)) {
              setState('STATE_EDITED');
              onChange(temp);
            } else {
              setState('STATE_INVALID');
              onChange(temp);
            }
          } else onChange(temp);
        }}
        onFocus={() => {
          if (state != 'STATE_INVALID') setState('STATE_EDITED');
        }}
        onBlur={(e) => {
          if (e.target.value.length == 0) setState('STATE_NORMAL');
        }}
      ></Input>
      <IconButton
        width="40px"
        height="40px"
        marginleft="-50px"
        marginright="10px"
        iconPath={'./' + inputType + '-eye.png'}
        onClick={() => {
          if (inputType == 'password') setInputType('normal');
          else setInputType('password');
        }}
      />
    </Container>
  );
};
