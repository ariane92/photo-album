import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {Container, BackToSignIn, BackToSignInText} from './styles';

const More: React.FC = () => {
  const navigation = useNavigation();
  return (
    <BackToSignIn onPress={() => navigation.navigate('Login')}>
      <Icon name="log-out" size={20} color="#fff" />
      <BackToSignInText>Sair</BackToSignInText>
    </BackToSignIn>
  );
};

export default More;
