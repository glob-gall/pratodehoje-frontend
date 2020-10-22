import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiClock } from 'react-icons/fi'
import api from '../../services/api'
import IngredientCard from '../../components/IngredientCard'
import backgroundImg from '../../images/comida.png'
import {
  RecipeContainer,
  DetailsContainer,
  TitleContainer,
  MethodContainer,
  IngredientsContainer,
  MethodTtitle,
} from './styles'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'

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
  time: string
}

interface IParams {
  id: string
}

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams<IParams>()
  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${id}`)
        setRecipe(response.data)

        setLoaded(true)
      } catch {
        setError(true)
      }
    }
    loadRecipe()
  }, [id])

  if (loaded) {
    return (
      <RecipeContainer>
        <TitleContainer>
          {recipe.avatar_url ? (
            <img src={recipe.avatar_url} alt="recipe" />
          ) : (
            <img src={backgroundImg} alt="recipe" />
          )}
          <h2>{recipe.name}</h2>
        </TitleContainer>
        <DetailsContainer>
          <MethodContainer>
            <MethodTtitle>
              <strong>Modo de preparo</strong>
              {/* <p>{`tempo de preparo: ${recipe.time} minutos`}</p> */}
              <p>
                <FiClock size={24} />
                {`${recipe.time} mins`}
              </p>
            </MethodTtitle>
            <ul>
              {recipe.method.map(step => {
                const i = recipe.method.indexOf(step) + 1

                return <li key={i}>{`${i} - ${step}`}</li>
              })}
            </ul>
          </MethodContainer>
          <IngredientsContainer>
            <strong>Ingredientes</strong>
            {recipe.ingredients.map(ingredient => (
              <IngredientCard key={ingredient.id} message={ingredient.name} />
            ))}
          </IngredientsContainer>
        </DetailsContainer>
      </RecipeContainer>
    )
  }
  if (error) {
    return <NotFound title="Recipe not found" />
  }
  return <Loading />
}

export default RecipeDetails
