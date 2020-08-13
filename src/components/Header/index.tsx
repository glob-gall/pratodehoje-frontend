import React, { useState, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems, Burguer } from './styled'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  page: 'dashboard' | 'topRecipes' | 'profiles'
}
const Header: React.FC<HeaderProps> = ({ page }) => {
  const [isActive, setIsActive] = useState(false)
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
          <Link to="/" className="topRecipes">
            Mais acessados
          </Link>
          <Link to="/profiles" className="profiles">
            Profissionais
          </Link>
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
