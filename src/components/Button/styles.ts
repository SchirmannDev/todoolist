import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: #eea5f9;
  border-radius: 25px;
  padding: 18px;
  align-items: center;
  width: ${width * 0.8}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Mediun';
`;
