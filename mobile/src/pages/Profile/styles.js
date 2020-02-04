import styled from 'styled-components/native';
import color from '~/styles/colors';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: ${color.separator};
  margin: 20px 0 30px;
`;

export const LoggoutButton = styled(Button)`
  margin-top: 10px;
  background: ${color.busy};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${color.light};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
