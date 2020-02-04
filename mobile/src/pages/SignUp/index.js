import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLinkText,
  SignLink,
} from './styles';

export default function SignUp({ navigation }) {
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  function handleSubmit() {
    if (password !== passwordAgain) {
      return Alert.alert(
        'Erro no cadastro',
        'A confirmação de senha está incorreta'
      );
    }

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
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
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            onSubmitEditing={() => passwordAgainRef.current.focus()}
            placeholder="Sua senha"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            returnKeyType="send"
            value={passwordAgain}
            onChangeText={setPasswordAgain}
            onSubmitEditing={handleSubmit}
            ref={passwordAgainRef}
            placeholder="Confirme sua senha"
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Cadastrar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
