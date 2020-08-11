import React, { useState } from 'react'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, NavItems, Burguer } from './styled'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={LogoImg} alt="prato de hoje" />
        </Logo>
        <NavItems active={isActive}>
          <a href="/">Procurar receitas</a>
          <a href="/">Mais acessados</a>
          <a href="/">Profissionais</a>
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
