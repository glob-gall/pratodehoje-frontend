import React from 'react'
import LogoImg from '../../images/logo.svg'
import { Container, Logo, Nav } from './styled'

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
    </Container>
  )
}

export default Header
