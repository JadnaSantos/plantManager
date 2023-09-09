import styled, { css } from 'styled-components/native';

interface TextInputProps {
  placeholder: string;
  onBlur: () => void;
  onFocus: () => void;
  isFocused: boolean;
  isFilled: boolean;
  onChange: Function;
}

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 54px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;

  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Footer = styled.View`
  padding: 20px;
  width: 100%;
  margin-top: 40px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;

  width: 100%;

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.green};
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: ${({ theme }) => theme.colors.gray};
    `}
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;
