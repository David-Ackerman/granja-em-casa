import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  position: fixed;
  background: #000000d1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerStyled = styled.div`
  position: relative;
  background: #e8e8e8;
  z-index: auto;
  border-radius: 8px;
  width: 90vw;
  max-width: 500px;
  height: 70%;
  padding: 80px 20px;
  > button {
    position: absolute;
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    color: #505050;
    top: 10px;
    right: 10px;
  }
  > form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > input {
      width: 90%;
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
