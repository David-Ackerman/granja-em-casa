import React, { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { planFrequency } from '../CardProduct/mock';

import {
  Button,
  CardProductContainer,
  CardProductDescriptionEggs,
  CardProductQuantityEggs,
  CardProductTitle,
  Icon,
  SelectedTypeQuantityEggs,
} from './styles';

type Props = {
  img: string;
  title: string;
  productList: Array<{
    id: number;
    quantityEggs: number;
    value: number;
  }>;
};
export const CardItem = ({ img, productList, title }: Props) => {
  const [quantity, setQuantity] = useState('');
  const [frequency, setFrequency] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <CardProductContainer>
      <Modal
        close={closeModal}
        items={{ quantity, frequency, product: title }}
        open={openModal}
      />
      <CardProductTitle>{title}</CardProductTitle>
      <CardProductQuantityEggs>
        {' '}
        {quantity.length ? quantity?.slice(0, 2) : 0} ovos
      </CardProductQuantityEggs>
      <CardProductDescriptionEggs>
        Galinhas criadas soltas
      </CardProductDescriptionEggs>
      <Icon>
        <img src={img} alt="ola" width={230} />
      </Icon>
      <SelectedTypeQuantityEggs
        onChange={(e) => setQuantity(e.currentTarget.value)}
      >
        <option value="0">Quantidade e Preço</option>
        {productList.map((options) => (
          <option
            key={options.id}
            value={`${options.quantityEggs}-${options.value}`}
          >
            {' '}
            {options.quantityEggs} - ovos{' '}
            {options.value
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
              .replace('.', ',')}{' '}
          </option>
        ))}
      </SelectedTypeQuantityEggs>
      <SelectedTypeQuantityEggs
        onChange={(e) => setFrequency(e.currentTarget.value)}
      >
        <option value="0">Escolha a periodicidade:</option>
        {planFrequency.map((options) => (
          <option key={options} value={options}>
            {' '}
            {options}
          </option>
        ))}
      </SelectedTypeQuantityEggs>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Assinar
      </Button>
    </CardProductContainer>
  );
};
