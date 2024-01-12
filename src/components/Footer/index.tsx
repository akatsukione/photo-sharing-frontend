import { Container, FooterIcon, FooterText, FooterTitle } from './styles';

export const FooterComponent: React.FC = () => {
  return (
    <Container>
      <FooterTitle>
        PHOT
        <FooterIcon src="./logo.svg" />
        SHARE 2023
      </FooterTitle>
      <FooterText>Thanks for visiting PhotoShare</FooterText>
    </Container>
  );
};
