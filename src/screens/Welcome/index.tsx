import * as S from './styles';
import { Image } from 'react-native';
import React from 'react';
import { Button } from '../../components/Button';
import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <S.Container>
      <S.Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </S.Title>

      <Image source={wateringImg} resizeMode="contain" />

      <S.SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </S.SubTitle>

      <Button title="Avançar" onPress={handleStart} />
    </S.Container>
  );
};
