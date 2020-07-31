import React from 'react';
import {Image} from 'react-native';

import Button from '../../components/Button';

import {Container, Title} from './styles';
import logo from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Faça seu Logon</Title>

      <Button>Entrar</Button>
    </Container>
  );
};

export default Login;
