import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import GlobalStyle from './styles/global'
import Profiles from './pages/Profiles'
import RecipeDetails from './pages/RecipeDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/:id" component={RecipeDetails} />
        </Switch>
      </Router>

      <GlobalStyle />
    </div>
  )
}

export default App
