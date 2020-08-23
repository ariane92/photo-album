import React from 'react';
import {View, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
const Camera: React.FC<any> = () => {
  const navigation = useNavigation();
  useFocusEffect(() => {
    ImagePicker.launchCamera(
      {
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar a câmera',
      },
      (response) => {
        if (response.didCancel) {
          navigation.navigate('HomePage');
        }

        if (response.error) {
          Alert.alert('Erro ao tentar utilizar a camera');
          return;
        } else {
          const source = {uri: response.uri};
          navigation.navigate('HomePage');
        }
      },
    );
  });
  return <View />;
};

export default Camera;
