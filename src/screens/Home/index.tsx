import React from 'react';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Olá Esportista</S.Title>
      </S.Header>

      <S.Input
        placeholder="Qual exercicio realizei"
        placeholderTextColor="#fff"
      />
      <S.Title>Seus esportes praticados:</S.Title>
    </S.Container>
  );
};

export default Home;
