import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";

import AvatarInput from "./AvatarInput/index";

import { signOut } from "~/store/modules/auth/actions";
import { updateProfileRequest } from "~/store/modules/user/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de nova senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>

      <button onClick={() => dispatch(signOut())} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
