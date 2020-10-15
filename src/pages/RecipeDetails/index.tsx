import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import IngredientCard from '../../components/IngredientCard'
import backgroundImg from '../../images/comida.png'
import {
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

interface IParams {
  id: string
}

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe)
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams<IParams>()
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
              <IngredientCard key={ingredient.id} message={ingredient.name} />
            ))}
          </IngredientsContainer>
        </DetailsContainer>
      </RecipeContainer>
    )
  }
  return <h1>loading</h1>
}

export default RecipeDetails
