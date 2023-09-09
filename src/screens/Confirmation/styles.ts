import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 30px;
`

export const Title = styled.Text`
  font-weight: bold;

  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};

  line-height: 38px;
  margin-top: 15px;
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 17px;

  padding: 20px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Footer = styled.View`
  width: 100%;
  padding: 50px;
  margin-top: 20px;
`


export const Emoji = styled.Text`
  font-size: 78px;
`
