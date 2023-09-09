import { Button } from '../../components/Button';
import * as S from './styles';

export const Confirmation = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Emoji>😄</S.Emoji>

        <S.Title>Prontinho</S.Title>

        <S.SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com
        </S.SubTitle>
        <S.Footer>
          <Button title="Começar" />
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};
