import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

const More: React.FC = () => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name="log-out" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default More;
