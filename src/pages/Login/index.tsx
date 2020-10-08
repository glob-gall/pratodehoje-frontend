/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Link, useHistory } from 'react-router-dom'
import { Container } from './styles'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'

interface dataSignIn {
  email: string
  password: string
}

const Login: React.FC = () => {
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()

  const handleSubmit = useCallback(async (data: dataSignIn) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('campo obrigatório')
          .email('email invalido'),
        password: Yup.string()
          .required('campo obrigatório')
          .min(8, 'senha invalida'),
      })
      await schema.validate(data, {
        abortEarly: false,
      })
      const { email, password } = data

      await api.post('/session', { email, password })

      signIn({
        email,
        password,
      })

      history.push('/')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          name="email"
          label="Email"
          placeholder="digite seu E-mail aqui"
        />

        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha aqui"
        />

        <button type="submit">Login</button>
        <Link to="/cadastrar">não tem uma conta? cadastre-se</Link>
      </Form>
    </Container>
  )
}

export default Login
