import React from 'react'
import { TiSocialInstagram } from 'react-icons/ti'
import { FaFacebookSquare } from 'react-icons/fa'
import { Container, Content, SocialLinks } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>© 2020 - Todas as lisenças reservadas Glob</p>
      </Content>
      <SocialLinks>
        <div>
          <TiSocialInstagram size={27} />
          @instaReceitasHoje
        </div>
        <div>
          <FaFacebookSquare size={25} />
          /receitas-de-hoje
        </div>
      </SocialLinks>
    </Container>
  )
}

export default Footer
