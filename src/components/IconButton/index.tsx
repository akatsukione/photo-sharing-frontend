import React from 'react';
import { Button, Icon } from './styles';

interface IconButtonProps {
  iconPath: string;
  width: string;
  height: string;
  marginleft: string;
  marginright: string;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      marginleft={props.marginleft}
      marginright={props.marginright}
    >
      <Icon width={props.width} height={props.height} src={props.iconPath} />
    </Button>
  );
};
