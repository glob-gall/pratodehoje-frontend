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
import MyProfile from '../pages/MyProfile'
import MyRecipeDetails from '../pages/MyRecipeDetails'
import EditRecipe from '../pages/editRecipe'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profiles" exact component={Profiles} />
      <Route path="/profile/:id" exact component={ProfileDetails} />
      <Route path="/recipe/:id" exact component={RecipeDetails} />
      <NotAuthenticatedRoute path="/login" exact component={Login} />
      <NotAuthenticatedRoute path="/cadastrar" exact component={Register} />
      <Route path="/createRecipe" isPrivate component={CreateRecipe} />
      <Route path="/me" exact isPrivate component={MyProfile} />
      <Route
        path="/me/:recipe_id"
        exact
        isPrivate
        component={MyRecipeDetails}
      />
      <Route
        path="/editRecipe/:recipe_id"
        exact
        isPrivate
        component={EditRecipe}
      />
    </Switch>
  )
}

export default Routes
