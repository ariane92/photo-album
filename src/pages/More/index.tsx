import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

const More: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon name="log-out" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default More;
