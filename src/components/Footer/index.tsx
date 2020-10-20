import React from 'react'
import { TiSocialInstagram } from 'react-icons/ti'
import { FaFacebookSquare } from 'react-icons/fa'
import { Container, Content, SocialLinks, Contact } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>© 2020 - Todos os direitos reservados</p>
      </Content>
      <SocialLinks>
        <a
          href="https://www.instagram.com/receita.de.hoje.net.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialInstagram size={27} color="#fcfcfc" />
          @receita.de.hoje.net.br
        </a>
        <a
          href="https://www.facebook.com/receitadehoje.net.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={25} color="#fcfcfc" />
          /receitadehoje.net.br
        </a>
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
