import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems, Burguer, ProfileNav } from './styled'
import { useAuth } from '../../hooks/auth'

const Header: React.FC = () => {
  const { user, signUp } = useAuth()

  const [isActive, setIsActive] = useState(false)
  const [ProfileMenuIsActive, setProfileMenuIsActive] = useState(false)

  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={LogoImg} alt="prato de hoje" />
        </Logo>
        <NavItems>
          <NavLink to="/" exact activeClassName="active">
            Procurar receitas
          </NavLink>
          <NavLink to="/createRecipe" exact activeClassName="active">
            Criar receitas
          </NavLink>
          <NavLink to="/profiles" exact activeClassName="active">
            Cozinheiros
          </NavLink>
          <ProfileNav onClick={() => setProfileMenuIsActive(state => !state)}>
            {ProfileMenuIsActive &&
              (user ? (
                <ul>
                  <li>
                    <NavLink to={`/profile/${user.id}`}>Perfil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={signUp}>
                      Sair
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cadastrar">Cadastrar</NavLink>
                  </li>
                </ul>
              ))}
          </ProfileNav>
        </NavItems>
      </Nav>
      <Burguer
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        <div />
        <div />
        <div />
      </Burguer>
    </Container>
  )
}

export default Header
