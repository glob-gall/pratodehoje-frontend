import React, { useState, useCallback } from 'react'
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

                // hasError={hasNameError}
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
            <button type="button">Login</button>
          </div>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Register
