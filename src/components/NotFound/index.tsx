import React from 'react'

import { Container, NotFoundContainer } from './styles'

interface NotFoundProps {
  title?: string
  error?: string
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'not found',
  error = '404',
}) => {
  return (
    <Container>
      <NotFoundContainer>
        <h1>{title}</h1>
        <h2>{error}</h2>
      </NotFoundContainer>
    </Container>
  )
}

export default NotFound
