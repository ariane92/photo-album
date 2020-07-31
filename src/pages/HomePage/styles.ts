import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ApiRequest} from './index';

export const Container = styled.View``;

export const ImagesList = styled(FlatList as new () => FlatList<ApiRequest>)``;

export const Images = styled.Image`
  width: 300px;
  height: 300px;
`;
