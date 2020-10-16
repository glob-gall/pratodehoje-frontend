import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import backgroundImg from '../../images/comida.png'
import {
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
  Recipe,
} from './styles'
import Loading from '../../components/Loading'

interface Ingredient {
  id: string
  name: string
}
interface IRecipe {
  id: string
  name: string
  avatar_url: string
  ingredients: Ingredient[]
  method: string[]
  equipaments: string
}
interface IUser {
  id: string
  name: string
  email: string
  avatar_url: string
  recipes: IRecipe[]
}
interface ParamsType {
  id: string
}

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams<ParamsType>()
  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${id}`)
      setUser(response.data)
      setLoaded(true)
    }
    loadUser()
  }, [id])
  if (loaded) {
    return (
      <ProfileContainer>
        <TitleContainer>
          <div>
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="recipe" />
            ) : (
              <img src={backgroundImg} alt="recipe" />
            )}
          </div>
          <div className="right">
            <h2>{user.name}</h2>
            <textarea disabled value="Em breve disponivel para alterações..." />
          </div>
        </TitleContainer>
        <RecipesContainer>
          {user.recipes.map(recipe => (
            <Recipe key={recipe.id} to={`/recipe/${recipe.id}`}>
              {recipe.avatar_url ? (
                <img src={recipe.avatar_url} alt="recipe" />
              ) : (
                <img src={backgroundImg} alt="recipe" />
              )}
              <h4>{recipe.name}</h4>
            </Recipe>
          ))}
        </RecipesContainer>
      </ProfileContainer>
    )
  }
  return <Loading />
}

export default UserDetails
