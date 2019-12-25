import React from 'react';
import { Link } from 'react-router-dom';
import {Input, Form} from '@rocketseat/unform'
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email:Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  name:Yup.string()
    .required('O nome é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve conter no minimo 6 caracteres'),
})

export default function SignUp() {
  function handleSubmit(data){

  }

  return (
   <>
   <img src={logo} alt="GoBarber"/>

   <Form schema={schema} onSubmit={handleSubmit}>
     <Input name="name" placeholder="Nome completo"/>
     <Input name="email" type="email" placeholder="Seu e-mail"/>
     <Input name="password" type="password" placeholder="Sua senha secreta"/>
    
     <button type="submit">Criar conta</button>
     <Link to="/">Já tenho conta</Link>
   </Form>
   </>
  );
}
