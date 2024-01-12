import { HTMLAttributes } from 'react';
import { Input } from './styles';

interface LabeledInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = (props) => {
  return <Input {...props} />;
};
