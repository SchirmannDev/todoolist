import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #f8ffc9;
`;

export const Header = styled.View`
  height: 113px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 23px;
  color: #a8ceff;
  margin-top: 15px;
  font-family: 'Poppins-Medium';
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding: 20px;
  border-radius: 25px;
  background-color: #baffe3;
  margin-top: 15px;
  width: ${width * 0.9}px;
  color: #fbc1bf;
`;
