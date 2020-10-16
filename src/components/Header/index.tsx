import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems } from './styled'
import { useAuth } from '../../hooks/auth'

const Header: React.FC = () => {
  const { user } = useAuth()

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
          {user ? (
            <NavLink to="/me" exact activeClassName="active">
              Meu Perfil
            </NavLink>
          ) : (
            <NavLink to="/login" exact activeClassName="active">
              Login
            </NavLink>
          )}
        </NavItems>
      </Nav>
    </Container>
  )
}

export default Header
