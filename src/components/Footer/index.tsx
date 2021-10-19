import React from 'react';
import FooterSVG from '../../assets/footer.svg';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={FooterSVG} alt="Empresa fabricante"/>
    </Container>
  )
}

export default Footer;