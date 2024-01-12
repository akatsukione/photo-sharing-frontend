import { Image } from 'components';
import { Header, Description } from './styles';

export const DashboardView: React.FC = () => {
  return (
    <div className="flex column align-center height-100">
      <Image
        src="./hitch-hiker.jpg"
        alt="hitch-hiker"
        style={{ position: 'relative' }}
      />
      <br />
      <Header>Welcome Username</Header>
      <Description>
        We support function to explore the world of photos
      </Description>
      <Description>
        Of course you have your own photos and albums and can share just with
        your friends and chat about your photos' specialty
      </Description>
    </div>
  );
};
