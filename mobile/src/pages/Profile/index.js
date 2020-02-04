import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {
  FormInput,
  Separator,
  Container,
  LoggoutButton,
  Title,
  Form,
} from './styles';
import { SubmitButton } from '../SignIn/styles';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState(profile.email);
  const [name, setName] = useState(profile.name);

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    if (password !== confirmPassword) {
      return Alert.alert(
        'Erro no cadastro',
        'A confirmação de senha está incorreta'
      );
    }

    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );

    emailRef.value = '';
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
            placeholder="Nome completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            placeholder="Digite seu e-mail"
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Sua antiga senha"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            ref={passwordRef}
            placeholder="Sua nova senha"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onSubmitEditing={handleSubmit}
            ref={confirmPasswordRef}
            placeholder="Confirme sua nova senha"
          />
          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LoggoutButton onPress={handleLogout}>Sair do GoBarber</LoggoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
