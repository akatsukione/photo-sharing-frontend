import React from 'react';
import { Grid, Image, Footer, Caption, FeatureBar, SVG } from './styles';

export type PhotoType = {
  path: string;
  uploader: string;
  description: string;
};

type ImageCardProps = {
  photo: PhotoType;
  show: boolean;
  like: number;
  onClick: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  photo,
  show,
  like,
  onClick,
  onClickLike,
  onClickDislike,
}) => {
  return (
    <Grid>
      <Image src={photo.path} alt={photo.path} onClick={onClick} />
      <Footer>
        <Caption>{photo.uploader}</Caption>
        {show && (
          <FeatureBar>
            <SVG src="./thumb-up.svg" onClick={onClickLike} />
            <SVG src="./thumb-down.svg" onClick={onClickDislike} />
            {like}
          </FeatureBar>
        )}
      </Footer>
    </Grid>
  );
};
