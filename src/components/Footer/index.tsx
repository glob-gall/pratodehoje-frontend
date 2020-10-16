import React from 'react'
import { TiSocialInstagram } from 'react-icons/ti'
import { FaFacebookSquare } from 'react-icons/fa'
import { Container, Content, SocialLinks, Contact } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>© 2020 - Todas as lisenças reservadas</p>
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
      <Contact>
        <p>
          Em caso de erros ou qualquer problema, entre em contato:
          <strong>receitadehoje.suporte@gmail.com</strong>
        </p>
      </Contact>
    </Container>
  )
}

export default Footer
