import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import NotAuthenticatedRoute from './NotAuthenticatedRoute'
import Dashboard from '../pages/Dashboard'
import Profiles from '../pages/Profiles'
import ProfileDetails from '../pages/ProfileDetails'
import RecipeDetails from '../pages/RecipeDetails'
import CreateRecipe from '../pages/CreateRecipe'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/profile/:id" component={ProfileDetails} />
      <NotAuthenticatedRoute path="/login" component={Login} />
      <NotAuthenticatedRoute path="/cadastrar" component={Register} />
      <Route path="/createRecipe" isPrivate component={CreateRecipe} />
      <Route path="/:id" component={RecipeDetails} />
    </Switch>
  )
}

export default Routes
