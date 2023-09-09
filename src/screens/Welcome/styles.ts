import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;

  color: ${({ theme }) => theme.colors.heading} ;
`
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 20px;

  color: ${({ theme }) => theme.colors.heading} ;
`

export const Image = styled.Image`
  height: Dimensions.get('window')width * 0.7
`
