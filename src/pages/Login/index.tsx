import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { Container, GridContainer, Form } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [buttonError, setButtonError] = useState(false)
  const { signIn } = useAuth()
  const history = useHistory()

  const handleLogin = useCallback(async () => {
    setEmailError(false)
    setPasswordError(false)
    try {
      const schema = yup.object().shape({
        email: yup.string().required('email').email('email'),
        password: yup.string().min(6, 'password'),
      })
      await schema.validate(
        {
          email,
          password,
        },
        { abortEarly: false },
      )
      await signIn({ email, password })
      history.push('/')
    } catch (err) {
      console.log(err)

      if (!(err instanceof yup.ValidationError)) {
        setEmail('')
        setPassword('')
        setEmailError(true)
        setPasswordError(true)
        setButtonError(true)
        return
      }
      if (err.errors.includes('email')) {
        setEmailError(true)
      }
      if (err.errors.includes('password')) {
        setPasswordError(true)
      }
    }
  }, [history, signIn, email, password, setEmailError, setPasswordError])

  return (
    <GridContainer>
      <Header />
      <Container>
        <Form Error={buttonError}>
          <h2>Login</h2>
          <div>
            <div>
              <label htmlFor="email-field">
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
                type="password"
                animationOn
              />
            </div>
            <button type="button" onClick={() => handleLogin()}>
              Login
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Login
