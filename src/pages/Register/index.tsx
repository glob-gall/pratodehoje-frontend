import React, { useState, useCallback } from 'react'
import * as yup from 'yup'

import { Container, GridContainer, Form } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import api from '../../services/api'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const signUp = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('name'),
        email: yup.string().required('email').email('email'),
        password: yup.string().min(6, 'password'),
      })
      await schema.validate(
        {
          name,
          email,
          password,
        },
        { abortEarly: false },
      )
      await api.post('users', { name, email, password })
    } catch (err) {
      if (!(err instanceof yup.ValidationError)) {
        setEmailError(true)
        setNameError(true)
        setPasswordError(true)
        return
      }
      if (err.errors.includes('email')) {
        setEmailError(true)
      }
      if (err.errors.includes('name')) {
        setNameError(true)
      }
      if (err.errors.includes('password')) {
        setPasswordError(true)
      }
    }
  }, [name, email, password])

  return (
    <GridContainer>
      <Header />
      <Container>
        <Form>
          <h2>Cadastro</h2>
          <div>
            <div>
              <label htmlFor="name-field">
                <strong>Nome</strong>
              </label>
              <Input
                value={name}
                inputOnChange={e => setName(e.target.value)}
                placeholder="Digite seu nome..."
                animationOn
                hasError={nameError}
              />
            </div>
            <div>
              <label htmlFor="name-field">
                <strong>Email</strong>
              </label>
              <Input
                value={email}
                inputOnChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email..."
                animationOn
                hasError={emailError}
              />
            </div>
            <div>
              <label htmlFor="time-field">
                <strong>Senha</strong>
              </label>
              <Input
                value={password}
                hasError={passwordError}
                inputOnChange={e => setPassword(e.target.value)}
                placeholder="Digite sua senha..."
                animationOn
                type="password"
              />
            </div>
            <button type="button" onClick={signUp}>
              Cadastrar-se
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Register
