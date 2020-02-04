import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import color from '~/styles/colors';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${color.link};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${color.light};
  font-weight: bold;
  font-size: 16px;
`;
