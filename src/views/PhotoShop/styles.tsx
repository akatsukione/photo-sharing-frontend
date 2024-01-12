import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: fit-content;
  object-fit: contain;
  margin: 20px;
  box-shadow: 10px 10px 20px grey;
`;

interface CardProps {
  src: string;
  uploader: string;
  time: string;
  width: string;
}

export const Card: React.FC<CardProps> = ({ src, uploader, time, width }) => {
  return (
    <CardStyle width={width}>
      <img src={src} alt={src} style={{ width: '100%' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px',
        }}
      >
        <a>{uploader}</a>
        <a>{time}</a>
      </div>
    </CardStyle>
  );
};
