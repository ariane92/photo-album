import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ApiRequest} from './index';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ImagesList = styled(FlatList as new () => FlatList<ApiRequest>)``;

export const Images = styled.Image`
  width: 180px;
  height: 180px;
  margin: 3px;
`;
