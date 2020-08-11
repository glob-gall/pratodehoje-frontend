import React, { useState, HTMLAttributes } from 'react'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems, Burguer } from './styled'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  page: 'dashboard' | 'topRecipes' | 'profiles'
}
const Header: React.FC<HeaderProps> = ({ page, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container {...props}>
      <Nav>
        <Logo>
          <img src={LogoImg} alt="prato de hoje" />
        </Logo>
        <NavItems active={isActive} page={page}>
          <a href="/" className="dashboard">
            Procurar receitas
          </a>
          <a href="/" className="topRecipes">
            Mais acessados
          </a>
          <a href="/" className="profiles">
            Profissionais
          </a>
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
