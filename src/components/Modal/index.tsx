import React from 'react';
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
  emailjs.init('user_0TcZKbW38p30VqZEeQuyq');
  if (!open) return <></>;

  const submit = (event: any) => {
    event.preventDefault();

    const userName = event.currentTarget.user_name.value;
    const userAge = event.currentTarget.user_age.value;
    const userAddress = event.currentTarget.user_address.value;
    const userTel = event.currentTarget.user_tel.value;
    const userEmail = event.currentTarget.user_name.value;

    const message = `
      Necessario entrar em contato com o/a ${userName} para realizar orçamento de ${items.product} para frequência ${items.frequency}
      na quantidade de ${items.quantity}.
      
      Dados do cliente:
    
      Nome: ${userName}
      Idade: ${userAge}
      Endereço: ${userAddress}
      Telefone: ${userTel}
      Email: ${userEmail}
    `;
    emailjs
      .send(`service_5biacen`, apikey.TEMPLATE_ID, { message }, apikey.USER_ID)
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
  return (
    <BackgroundStyled>
      <ContainerStyled>
        <button onClick={close}>X</button>
        <form onSubmit={submit}>
          <input name="user_name" placeholder="Nome" type="text" />
          <input name="user_age" placeholder="Idade" type="number" />
          <input name="user_address" placeholder="Endereço" type="text" />
          <input name="user_tel" placeholder="Telefone" type="tel" />
          <input name="user_email" placeholder="Email" type="email" />
          <input type="submit" value="Enviar orçamento" />
        </form>
      </ContainerStyled>
    </BackgroundStyled>
  );
};
