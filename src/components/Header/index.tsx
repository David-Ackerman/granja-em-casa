import React from 'react';
import Logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} width={900}  height={350}/>
    </HeaderContainer>
  )
}

export default Header;