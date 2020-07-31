import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Image} from 'react-native';
import axios from 'axios';

import {Container, ImagesList, Images} from './styles';

export interface ApiRequest {
  id: string;
  url: string;
}
const HomePage: React.FC = () => {
  const [images, setImages] = useState<ApiRequest[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setImages(response.data);
      });
  }, []);

  return (
    <Container>
      <ImagesList
        data={images}
        keyExtractor={(image) => String(image.id)}
        renderItem={({item}) => <Images source={{uri: item.url}} />}
      />
    </Container>
  );
};

export default HomePage;
