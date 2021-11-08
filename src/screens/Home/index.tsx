import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import Button from '../../components/Button';

import * as S from './styles';

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Olá Esportista</S.Title>
        </S.Header>

        <S.Form>
          <S.Input
            placeholder="Qual exercicio realizei"
            placeholderTextColor="#fbc1bf"
          />
          <S.Title>Seus esportes praticados:</S.Title>
          <Button title="Adicionar" />
        </S.Form>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
