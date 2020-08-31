import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import backgroundImg from '../../images/comida.png'
import {
  GridContainer,
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
  Recipe,
} from './styles'

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
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
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
      <GridContainer>
        <Header page="profiles" />
        <ProfileContainer>
          <TitleContainer>
            <div>
              <img src={backgroundImg} alt="recipe" />
            </div>
            <div>
              <h2>{user.name}</h2>
              <textarea disabled>
                Em breve disponivel para alterações...
              </textarea>
            </div>
          </TitleContainer>
          <RecipesContainer>
            {user.recipes.map(recipe => (
              <Recipe key={recipe.id} to={`/${recipe.id}`}>
                <img src={backgroundImg} alt="recipe" />
                <h4>{recipe.name}</h4>
              </Recipe>
            ))}
          </RecipesContainer>
        </ProfileContainer>
        <Footer />
      </GridContainer>
    )
  }
  return <h1>loading</h1>
}

export default UserDetails
