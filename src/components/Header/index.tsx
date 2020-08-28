import React, { useState, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems, Burguer, ProfileNav } from './styled'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  page?: 'dashboard' | 'createRecipe' | 'profiles'
}
const Header: React.FC<HeaderProps> = ({ page }) => {
  const [isActive, setIsActive] = useState(false)
  const [ProfileMenuIsActive, setProfileMenuIsActive] = useState(false)
  const [isLoged, setIsLoged] = useState(false)

  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={LogoImg} alt="prato de hoje" />
        </Logo>
        <NavItems active={isActive} activeLink={page}>
          <Link to="/" className="dashboard">
            Procurar receitas
          </Link>
          <Link to="/createRecipe" className="createRecipe">
            Criar receitas
          </Link>
          <Link to="/profiles" className="profiles">
            Profissionais
          </Link>
          <ProfileNav onClick={() => setProfileMenuIsActive(state => !state)}>
            {ProfileMenuIsActive &&
              (isLoged ? (
                <ul>
                  <li>Perfil</li>
                  <li>Sair</li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="cadastrar">Cadastrar</Link>
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
