import React from 'react';
import { StyledTextArea } from './styles';

type StyledTextAreaProps = {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export const StyledTextAreaComponent: React.FC<StyledTextAreaProps> = (
  props
) => {
  return (
    <StyledTextArea
      id="textarea"
      name="textarea"
      placeholder="Description"
      cols={100}
      rows={5}
      onChange={props.onChange}
    ></StyledTextArea>
  );
};
