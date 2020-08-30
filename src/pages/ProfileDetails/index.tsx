import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipesList from '../../components/RecipesList'
import backgroundImg from '../../images/comida.png'
import {
  GridContainer,
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
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

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe)
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const loadRecipe = async () => {
      // const response = await api.get(`/recipes/${id}`)
      // setRecipe(response.data)
      setLoaded(true)
    }
    loadRecipe()
  }, [id])
  if (loaded) {
    return (
      <GridContainer>
        <Header page="dashboard" />
        <ProfileContainer>
          <TitleContainer>
            <img src={backgroundImg} alt="recipe" />
            <div>
              <h2>Joao</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ex hic dignissimos vitae, neque laudantium sunt error
                ducimus quae aspernatur
              </p>
            </div>
          </TitleContainer>
          <RecipesContainer>
            <RecipesList recipesProps={[]} />
          </RecipesContainer>
        </ProfileContainer>
        <Footer />
      </GridContainer>
    )
  }
  return <h1>loading</h1>
}

export default RecipeDetails
