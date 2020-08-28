import React, { useState, useCallback } from 'react'
import { Container, GridContainer, Form } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
// import api from '../../services/api'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  return (
    <GridContainer>
      <Header />
      <Container>
        <Form>
          <h2>Login</h2>
          <div>
            <div>
              <label htmlFor="name-field">
                <strong>Email</strong>
              </label>
              <Input
                value={name}
                inputOnChange={e => setName(e.target.value)}
                placeholder="Digite seu email..."
                animationOn
                hasError={nameError}
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
            <button type="button">Login</button>
          </div>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Login
