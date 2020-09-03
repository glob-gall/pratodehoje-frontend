import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { GridContainer } from './styles/App'

import { AuthProvider } from './hooks/auth'
import Routes from './Routes/index'

import Header from './components/Header'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <GridContainer>
          <Header />
          <Routes />
          <Footer />
        </GridContainer>
      </AuthProvider>
      <GlobalStyle />
    </Router>
  )
}

export default App
