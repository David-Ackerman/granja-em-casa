import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { BackgroundStyled, ContainerStyled } from './styles';
import { apikey } from '../../services/emailkey';

type ModalProps = {
  items: {
    product: string;
    quantity: string;
    frequency: string;
  };
  open: boolean;
  close: () => void;
};
export const Modal = ({ close, items, open }: ModalProps) => {
  useEffect(() => {
    emailjs.init(apikey.USER_ID);
  }, []);

  const submit = (event: any) => {
    event.preventDefault();

    const userName = event.currentTarget.user_name.value;
    const userAge = event.currentTarget.user_age.value;
    const userAddress = event.currentTarget.user_address.value;
    const userComplement = event.currentTarget.user_address_complement.value;
    const userPhone = event.currentTarget.user_tel.value;
    const userEmail = event.currentTarget.user_name.value;

    const message = `
    Necessario entrar em contato com o/a ${userName} para realizar orçamento de ${items.product} para frequência ${items.frequency}
    na quantidade de ${items.quantity}.
    `;
    emailjs
      .send(
        apikey.SERVICE_ID,
        apikey.TEMPLATE_ID,
        {
          message,
          userName,
          userAge,
          userAddress,
          userPhone,
          userEmail,
          userComplement,
        },
        apikey.USER_ID
      )
      .then(
        (result) => {
          alert(
            'Seu pedido foi enviado com sucesso, aguarde o retorno da nossa equipe'
          );
          close();
        },
        (error) => {
          alert(
            'Ocorreu um erro ao enviar seu pedio, tente novamente mais tarde'
          );
          close();
        }
      );
  };
  if (!open) return <></>;
  return (
    <BackgroundStyled>
      <ContainerStyled>
        <button onClick={close}>X</button>
        <form onSubmit={submit}>
          <input name="user_name" placeholder="Nome" type="text" />
          <input name="user_age" placeholder="Idade" type="number" />
          <input name="user_address" placeholder="Endereço" type="text" />
          <input
            name="user_address_complement"
            placeholder="Complemento"
            type="text"
          />
          <input name="user_tel" placeholder="Telefone" type="tel" />
          <input name="user_email" placeholder="Email" type="email" />
          <input type="submit" value="Confirmar" />
        </form>
      </ContainerStyled>
    </BackgroundStyled>
  );
};
