import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import backgroundImg from '../../images/comida.png'
import {
  GridContainer,
  RecipeContainer,
  DetailsContainer,
  TitleContainer,
  MethodContainer,
  IngredientsContainer,
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
      const response = await api.get(`/recipes/${id}`)
      setRecipe(response.data)
      setLoaded(true)
    }
    loadRecipe()
  }, [id])
  if (loaded) {
    return (
      <GridContainer>
        <Header page="dashboard" />
        <RecipeContainer>
          <TitleContainer>
            <img src={backgroundImg} alt="recipe" />
            <h2>{recipe.name}</h2>
          </TitleContainer>
          <DetailsContainer>
            <MethodContainer>
              <strong>Modo de preparo</strong>
              <ul>
                {recipe.method.map(step => {
                  const i = recipe.method.indexOf(step) + 1

                  return <li key={i}>{`${i} - ${step}`}</li>
                })}
              </ul>
            </MethodContainer>
            <IngredientsContainer>
              <strong>Ingredients</strong>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </IngredientsContainer>
          </DetailsContainer>
        </RecipeContainer>
        <Footer />
      </GridContainer>
    )
  }
  return <h1>loading</h1>
}

export default RecipeDetails
