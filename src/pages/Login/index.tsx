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
              <Title>Faça seu Login</Title>
            </View>

            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
            />
            <Button onPress={delay}>Entrar</Button>
          </Container>
          <View style={{bottom: 30}}>
            {loading && <ActivityIndicator size={22} color="#312e38" />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
