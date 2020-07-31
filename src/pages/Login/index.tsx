import React, {useState, useCallback} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title} from './styles';
import logo from '../../assets/logo.png';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const navigateToHome = useCallback(() => {
    navigation.navigate('TabApp');
  }, [navigation]);

  const delay = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigateToHome();
    }, 3000);
  }, [navigateToHome]);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logo} />
            <View>
              <Title>Faça seu Logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button onPress={delay}>Entrar</Button>
          </Container>
          <View>{loading && <ActivityIndicator size={20} color="#000" />}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
