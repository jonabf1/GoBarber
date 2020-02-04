import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 70px;
  background: ${color.backgroundView};
  border-radius: 4px;
  margin: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const DataText = styled.Text`
  font-size: 15px;
  color: ${color.light};
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: ${color.light};
  padding: 15px 30px;
  margin-top: 30px;
`;
