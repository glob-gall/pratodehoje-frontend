import React from 'react'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav, Burguer } from './styled'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="prato de hoje" />
      </Logo>
      <Nav>
        <a href="/">Procurar receitas</a>
        <a href="/">Mais acessados</a>
        <a href="/">Profissionais</a>
      </Nav>
      <Burguer>
        <div />
        <div />
        <div />
      </Burguer>
    </Container>
  )
}

export default Header
