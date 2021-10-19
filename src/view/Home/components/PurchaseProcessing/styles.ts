import styled from 'styled-components';

export const PurchaseProcessingContainer = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 600px) {
    height: 900px;
    display: grid;
  }
`;

export const PurchaseProcessingContent = styled.div`
  height: 130px;
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 600px) {
    width: 190px;
  }
`;

export const PurcharProcessingTitle = styled.p`
  color:#FFFF;
  font-weight: 800;
  text-align: center;
`;
