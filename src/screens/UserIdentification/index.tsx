import * as S from './styles';
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const UserIdentification = () => {
  const navigation = useNavigation();

  const [isFocused, isSetIsFocused] = useState(false);
  const [isFilled, isSetIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleSubmit() {
    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    isSetIsFocused(false);
    isSetIsFilled(!!name);
  }

  function handleInputFocus() {
    isSetIsFocused(true);
  }

  function handleInputChange(value: string) {
    isSetIsFilled(!!value);
    setName(value);
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <S.Content>
            <S.Form>
              <S.Emoji>{isFilled ? '😁' : '😀'}</S.Emoji>
              <S.Title>
                Como podemos {'\n'}
                chamar você?
              </S.Title>

              <S.TextInput
                isFilled={isFilled}
                isFocused={isFocused}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChange={handleInputChange}
              />

              <S.Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </S.Footer>
            </S.Form>
          </S.Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
