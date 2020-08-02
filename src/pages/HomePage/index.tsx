import React, {useState, useEffect} from 'react';

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
        numColumns={2}
        renderItem={({item}) => <Images source={{uri: item.url}} />}
      />
    </Container>
  );
};

export default HomePage;
