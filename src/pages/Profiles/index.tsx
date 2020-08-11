import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, GridContainer } from './styles'

const Profiles: React.FC = () => {
  return (
    <GridContainer>
      <Header page="profiles" />
      <Container />
      <Footer />
    </GridContainer>
  )
}

export default Profiles
