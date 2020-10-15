import React, { useEffect, useState } from 'react'
import { FiImage } from 'react-icons/fi'

import api from '../../services/api'
import backgroundImg from '../../images/comida.png'
import {
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
  Recipe,
  ImageUpload,
} from './styles'
import { useAuth } from '../../hooks/auth'

interface Ingredient {
  id: string
  name: string
}
interface IRecipe {
  id: string
  name: string
  image_url: string
  ingredients: Ingredient[]
  method: string[]
  equipaments: string
}
interface IUser {
  id: string
  name: string
  email: string
  recipes: IRecipe[]
}

const UserDetails: React.FC = () => {
  const auth = useAuth()
  const [user, setUser] = useState({} as IUser)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${auth.user.id}`)
      setUser(response.data)
      setLoaded(true)
    }
    loadUser()
  }, [auth.user.id])

  if (loaded) {
    return (
      <ProfileContainer>
        <TitleContainer>
          <ImageUpload>
            <img src={backgroundImg} alt="recipe" />
            <label htmlFor="avatar">
              <FiImage size={36} color="#f2f2f2" />
            </label>
            <input type="file" id="avatar" accept=".png,.jpg" />
          </ImageUpload>
          <div className="right">
            <h2>{user.name}</h2>
            <textarea disabled>Em breve disponivel para alterações...</textarea>
          </div>
        </TitleContainer>
        <RecipesContainer>
          {user.recipes.map(recipe => (
            <Recipe key={recipe.id} to={`/recipe/${recipe.id}`}>
              <img src={backgroundImg} alt="recipe" />
              <h4>{recipe.name}</h4>
            </Recipe>
          ))}
        </RecipesContainer>
      </ProfileContainer>
    )
  }
  return <h1>loading</h1>
}

export default UserDetails
