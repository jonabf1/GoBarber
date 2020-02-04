import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import color from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Hour = styled(RectButton)`
  background: ${color.light};
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.6)};

  align-items: center;
  margin: 0 10px 20px;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${color.textBold};
`;
