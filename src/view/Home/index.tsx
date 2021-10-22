import React from 'react';
import Carousel from '../../components/Carousel';
import { CardProduct, PurchaseProcessing } from './components';
import { Container, TitleStyled } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Carousel />
      <TitleStyled>
        Granja em Casa é um serviço de assinaturas de ovos frescos de galinhas
        felizes (criadas soltas). Entregamos seus ovos preferidos em sua casa no
        dia agendado e conforme a sua recorrência desejada. Importante, você
        pode pausar a assinatura quando quiser! Veja abaixo como é simples:
      </TitleStyled>
      <PurchaseProcessing />
      <CardProduct />
    </Container>
  );
};

export default Home;
