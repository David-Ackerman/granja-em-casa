import React from 'react';
import ChickenBumpkin from '../../../../assets/chicken_bumpkin.svg';
import ChickenOrganic from '../../../../assets/chicken_organic.svg';
import ChickenRed from '../../../../assets/chicken_red.svg';
import ChickenWhite from '../../../../assets/chicken_white.svg';
import {
  Button,
  CardProductContainer,
  CardProductDescriptionEggs,
  CardProductFrequency,
  CardProductQuantityEggs,
  CardProductTitle,
  Container,
  Content,
  Icon,
  SelectedTypeQuantityEggs
} from './styles';

const CardProduct: React.FC = () => {

  const eggysRed = [
    {
      id: 1,
      quantityEggs: 10,
      value: 6,
    },
    {
      id: 2,
      quantityEggs: 12,
      value: 7.20,
    },
    {
      id: 3,
      quantityEggs: 20,
      value: 12,
    },
    {
      id: 4,
      quantityEggs: 24,
      value: 14.40,
    },
    {
      id: 5,
      quantityEggs: 30,
      value: 18,
    },
    {
      id: 6,
      quantityEggs: 60,
      value: 32,
    },
  ];

  const eggysWhite = [
    {
      id: 1,
      quantityEggs: 10,
      value: 5.50,
    },
    {
      id: 2,
      quantityEggs: 12,
      value: 6.40,
    },
    {
      id: 3,
      quantityEggs: 20,
      value: 11,
    },
    {
      id: 4,
      quantityEggs: 24,
      value: 12.80,
    },
    {
      id: 5,
      quantityEggs: 30,
      value: 16,
    },
    {
      id: 6,
      quantityEggs: 60,
      value: 32,
    },
  ];

  const eggysCaipiras = [
    {
      id: 1,
      quantityEggs: 10,
      value: 9,
    },
    {
      id: 2,
      quantityEggs: 12,
      value: 10.80,
    },
    {
      id: 3,
      quantityEggs: 20,
      value: 18,
    },
    {
      id: 4,
      quantityEggs: 24,
      value: 21.60,
    },
    {
      id: 5,
      quantityEggs: 30,
      value: 27,
    },
    {
      id: 6,
      quantityEggs: 60,
      value: 54,
    },
  ];

  const eggysCaipirasOrganicos = [
    {
      id: 1,
      quantityEggs: 10,
      value: 11.70,
    },
    {
      id: 2,
      quantityEggs: 12,
      value: 14,
    },
    {
      id: 3,
      quantityEggs: 20,
      value: 23.40,
    },
    {
      id: 4,
      quantityEggs: 24,
      value: 28,
    },
    {
      id: 5,
      quantityEggs: 30,
      value: 35,
    },
    {
      id: 6,
      quantityEggs: 60,
      value: 70,
    },
  ];

  const planFrequency = [
    'Semanal',
    'Quinzenal',
    'Mensal'
  ];

  return (
    <Container>
      <Content>
        <CardProductContainer>
          <CardProductTitle>
            Ovos Vermelhos
          </CardProductTitle>
          <CardProductQuantityEggs>
            10 ovos
          </CardProductQuantityEggs>
          <CardProductDescriptionEggs>
            Galinhas criadas soltas
          </CardProductDescriptionEggs>
          <Icon>
            <img src={ChickenRed} alt="ola" width={230} />
          </Icon>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {eggysRed.map(options => (
              <option key={options.id} value={options.value}> {options.quantityEggs} - ovos R$ {options.value} </option>
            ))}
          </SelectedTypeQuantityEggs>
          <CardProductFrequency>
            Escolha a periocidade:
          </CardProductFrequency>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {planFrequency.map(options => (
              <option key={options} value={options}> {options}</option>
            ))}
          </SelectedTypeQuantityEggs>
          <Button>Assinar</Button>
        </CardProductContainer>
        <CardProductContainer>
          <CardProductTitle>
            Ovos Brancos
          </CardProductTitle>
          <CardProductQuantityEggs>
            10 ovos
          </CardProductQuantityEggs>
          <CardProductDescriptionEggs>
            Galinhas criadas soltas
          </CardProductDescriptionEggs>
          <Icon>
            <img src={ChickenWhite} alt="ola" width={230} />
          </Icon>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {eggysWhite.map(options => (
              <option key={options.id} value={options.value}> {options.quantityEggs} - ovos R$ {options.value} </option>
            ))}
          </SelectedTypeQuantityEggs>
          <CardProductFrequency>
            Escolha a periocidade:
          </CardProductFrequency>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {planFrequency.map(options => (
              <option key={options} value={options}> {options}</option>
            ))}
          </SelectedTypeQuantityEggs>
          <Button>Assinar</Button>
        </CardProductContainer>
        <CardProductContainer>
          <CardProductTitle>
            Ovos Caipiras
          </CardProductTitle>
          <CardProductQuantityEggs>
            10 ovos
          </CardProductQuantityEggs>
          <CardProductDescriptionEggs>
            Galinhas criadas soltas
          </CardProductDescriptionEggs>
          <Icon>
            <img src={ChickenBumpkin} alt="ola" width={230} />
          </Icon>

          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {eggysCaipiras.map(options => (
              <option key={options.id} value={options.value}> {options.quantityEggs} - ovos R$ {options.value} </option>
            ))}
          </SelectedTypeQuantityEggs>
          <CardProductFrequency>
            Escolha a periocidade:
          </CardProductFrequency>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {planFrequency.map(options => (
              <option key={options} value={options}> {options}</option>
            ))}
          </SelectedTypeQuantityEggs>
          <Button>Assinar</Button>
        </CardProductContainer>
        <CardProductContainer>
          <CardProductTitle>
            Ovos Caipiras Orgânicos
          </CardProductTitle>
          <CardProductQuantityEggs>
            10 ovos
          </CardProductQuantityEggs>
          <CardProductDescriptionEggs>
            Galinhas criadas soltas
          </CardProductDescriptionEggs>
          <Icon>
            <img src={ChickenOrganic} alt="ola" width={230} />
          </Icon>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {eggysCaipirasOrganicos.map(options => (
              <option key={options.id} value={options.value}> {options.quantityEggs} - ovos R$ {options.value} </option>
            ))}
          </SelectedTypeQuantityEggs>
          <CardProductFrequency>
            Escolha a periocidade:
          </CardProductFrequency>
          <SelectedTypeQuantityEggs>
            <option value="0">Quantidade e Preço</option>
            {planFrequency.map(options => (
              <option key={options} value={options}> {options}</option>
            ))}
          </SelectedTypeQuantityEggs>
          <Button>Assinar</Button>
        </CardProductContainer>
      </Content>
    </Container>
  )
}

export default CardProduct;