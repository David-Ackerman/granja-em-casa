import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  position: fixed;
  background: #000000d1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const ContainerStyled = styled.div`
  margin: 150px auto;
  background: #e8e8e8;
  z-index: auto;
  border-radius: 8px;
  width: 440px;
  height: 680px;
  padding: 80px 20px;
  > form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > input {
      width: 320px;
      height: 45px;
      font-size: 16px;
      font-weight: 500;
      border: none;
      box-shadow: 0 3px 2px 1px #8080802e;
      border-radius: 8px;
      padding: 10px;
    }
  }
`;
