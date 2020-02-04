import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import color from '~/styles/colors';

export default styled(LinearGradient).attrs({
  colors: [color.g1, color.g2],
})`
  flex: 1;
`;
