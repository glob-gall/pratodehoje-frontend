import React from 'react'
import LoadingIcon from '../../images/loading.svg'
import { Container } from './styles'

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={LoadingIcon} alt="loading" />
    </Container>
  )
}

export default Loading
