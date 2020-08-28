import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import GlobalStyle from './styles/global'
import Profiles from './pages/Profiles'
import RecipeDetails from './pages/RecipeDetails'
import CreateRecipe from './pages/CreateRecipe'
import { AuthProvider } from './hooks/auth'
import Login from './pages/Login'
import Register from './pages/Register'

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/login" component={Login} />
            <Route path="/cadastrar" component={Register} />
            <Route path="/CreateRecipe" component={CreateRecipe} />
            <Route path="/:id" component={RecipeDetails} />
          </Switch>
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

export default App
