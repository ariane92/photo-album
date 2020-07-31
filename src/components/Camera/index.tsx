import React, {useCallback, useEffect} from 'react';
import {View, TouchableOpacity, Alert, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

const Camera: React.FC = () => {
  useEffect(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione uma imagem',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar a câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao tentar utilizar a camera');
          return;
        }
        const source = {uri: response.uri};

        this.setState({
          avatarSource: source,
        });
      },
    );
  }, []);
  return <View />;
};

export default Camera;
