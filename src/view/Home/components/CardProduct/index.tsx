import React from 'react';
import ChickenBumpkin from '../../../../assets/chicken_bumpkin.svg';
import ChickenOrganic from '../../../../assets/chicken_organic.svg';
import ChickenRed from '../../../../assets/chicken_red.svg';
import ChickenWhite from '../../../../assets/chicken_white.svg';
import { CardItem } from '../CardItem';
import {
  eggysCaipiras,
  eggysCaipirasOrganicos,
  eggysRed,
  eggysWhite,
} from './mock';
import { Container, Content } from './styles';

const CardProduct: React.FC = () => {
  return (
    <Container>
      <Content>
        <CardItem
          img={ChickenRed}
          productList={eggysRed}
          title="Ovos Vermelhos"
        />
        <CardItem
          img={ChickenWhite}
          productList={eggysWhite}
          title="Ovos Brancos"
        />
        <CardItem
          img={ChickenBumpkin}
          productList={eggysCaipiras}
          title="Ovos Caipiras"
        />
        <CardItem
          img={ChickenOrganic}
          productList={eggysCaipirasOrganicos}
          title="Ovos Caipiras Orgânicos"
        />
      </Content>
    </Container>
  );
};

export default CardProduct;
