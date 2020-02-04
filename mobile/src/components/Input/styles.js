import styled from 'styled-components/native';
import color from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${color.backgroundView};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: color.placeholder,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${color.inputText};
`;
