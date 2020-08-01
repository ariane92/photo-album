import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Camera: React.FC = () => {
  useEffect(() => {
    ImagePicker.launchCamera(
      {
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar a câmera',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao tentar utilizar a camera');
          return;
        }
      },
    );
  }, []);
  return <View />;
};

export default Camera;
