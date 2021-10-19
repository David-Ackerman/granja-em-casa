import React from 'react';
import FooterSVG from '../../assets/footer.svg';
import {Container, Title} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={FooterSVG} />
    </Container>
  )
}

export default Footer;