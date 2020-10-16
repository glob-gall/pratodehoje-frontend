/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Container } from './styles'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'

interface dataSignUp {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const handleSubmit = useCallback(
    async (data: dataSignUp) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('campo obrigatório'),
          email: Yup.string()
            .required('campo obrigatório')
            .email('email invalido'),
          password: Yup.string()
            .required('campo obrigatório')
            .min(8, 'senha invalida'),
          password_confirmation: Yup.string()
            .required('senha necessaria')
            .oneOf([Yup.ref('password')], 'confirmação incorreta'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })
        const { email, name, password } = data
        await api.post('/users', { email, name, password })

        history.push('/login')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          return
        }
        console.log(err)
      }
    },
    [history],
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

        <Input name="name" label="Nome" placeholder="digite seu nome aqui" />
        <Input
          name="email"
          label="E-mail"
          placeholder="digite seu Email aqui"
        />
        <Input
          name="password"
          type="password"
          label="Senha"
          placeholder="digite sua senha aqui"
        />
        <Input
          name="password_confirmation"
          type="password"
          label="Confirmar senha"
          placeholder="confirme sua senha"
        />
        <button type="submit">Cadastrar-se</button>
        <Link to="/login">Já tem uma conta? faça login</Link>
      </Form>
    </Container>
  )
}

export default Register
