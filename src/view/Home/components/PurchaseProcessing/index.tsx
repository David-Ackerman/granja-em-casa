import React, { useEffect, useState } from 'react';
import { GiHouse, GiNestEggs } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdPayment,
} from 'react-icons/md';
import {
  ArrowRight,
  PurcharProcessingTitle,
  PurchaseProcessingContainer,
  PurchaseProcessingContent,
} from './styles';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const PurchaseProcessing: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <PurchaseProcessingContainer>
      <PurchaseProcessingContent>
        <GiNestEggs color="#BF4904" size={80} />
        <PurcharProcessingTitle>ESCOLHA O TIPO DOS OVOS</PurcharProcessingTitle>
      </PurchaseProcessingContent>
      <ArrowRight>
        {width >= 600 ? (
          <MdKeyboardArrowRight color="#BF4904" size={80} />
        ) : (
          <MdKeyboardArrowDown color="#BF4904" size={80} />
        )}
      </ArrowRight>
      <PurchaseProcessingContent>
        <GoCalendar color="#BF4904" size={80} />
        <PurcharProcessingTitle>DEFINA A FREQUÊNCIA</PurcharProcessingTitle>
      </PurchaseProcessingContent>
      <ArrowRight>
        {width >= 600 ? (
          <MdKeyboardArrowRight color="#BF4904" size={80} />
        ) : (
          <MdKeyboardArrowDown color="#BF4904" size={80} />
        )}
      </ArrowRight>
      <PurchaseProcessingContent>
        <MdPayment color="#BF4904" size={80} />
        <PurcharProcessingTitle>FAÇA O PAGAMENTO</PurcharProcessingTitle>
      </PurchaseProcessingContent>
      <ArrowRight>
        {width >= 600 ? (
          <MdKeyboardArrowRight color="#BF4904" size={80} />
        ) : (
          <MdKeyboardArrowDown color="#BF4904" size={80} />
        )}
      </ArrowRight>
      <PurchaseProcessingContent>
        <GiHouse color="#BF4904" size={80} />
        <PurcharProcessingTitle>RECEBA OS OVOS</PurcharProcessingTitle>
      </PurchaseProcessingContent>
    </PurchaseProcessingContainer>
  );
};

export default PurchaseProcessing;
