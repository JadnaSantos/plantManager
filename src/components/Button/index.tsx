import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Container>
  );
}
