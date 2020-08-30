import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../pages/Dashboard'
import Profiles from '../pages/Profiles'
import RecipeDetails from '../pages/RecipeDetails'
import CreateRecipe from '../pages/CreateRecipe'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrar" component={Register} />
      <Route path="/createRecipe" isPrivate component={CreateRecipe} />
      <Route path="/:id" component={RecipeDetails} />
    </Switch>
  )
}

export default Routes
