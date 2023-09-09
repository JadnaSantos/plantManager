import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 16px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
