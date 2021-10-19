import React from 'react';
import Carousel from '../../components/Carousel';
import { CardProduct, PurchaseProcessing } from './components';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Carousel />
      <PurchaseProcessing />
      <CardProduct />
    </Container>
  )
}

export default Home;