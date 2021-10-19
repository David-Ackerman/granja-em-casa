import styled from 'styled-components';

export const CardProductContainer = styled.div`
  background: #ffffffff;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 20px;
`;

export const CardProductTitle = styled.p`
  font-size: 20px;
  color: #bf4904;
  font-weight: 800;
  margin-bottom: 25px;
`;

export const CardProductQuantityEggs = styled.p`
  color: #d9bca3;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CardProductDescriptionEggs = styled.p`
  color: #f28705;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const SelectedTypeQuantityEggs = styled.select`
  width: 220px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px;
`;

export const CardProductFrequency = styled.p`
  color: #f28705;
  font-weight: 600;
  margin-top: 15px;
`;

export const Icon = styled.div`
  margin: -50px;
  padding: 0;
`;

export const Button = styled.button`
  background: #bf4904;
  color: #ffffff;
  width: 220px;
  height: 40px;
  border-radius: 8px;
  margin-top: 20px;
  border: none;
  font-weight: 600;
  transition: all 0.5s linear;
  &:hover {
    background: none;
    border-style: solid;
    border-color: #f28705;
    border-width: solid 2px;
    color: #bf4904;
    font-weight: 600;
  }
  &:focus {
    outline: 0 !important;
  }
`;
