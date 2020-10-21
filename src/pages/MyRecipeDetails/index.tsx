import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
  SubmitContainer,
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
  time: string
}

interface IParams {
  recipe_id: string
}

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe)
  const [loaded, setLoaded] = useState(false)
  const { recipe_id } = useParams<IParams>()
  useEffect(() => {
    const loadRecipe = async () => {
      const response = await api.get(`/recipes/${recipe_id}`)
      setRecipe(response.data)
      setLoaded(true)
    }
    loadRecipe()
  }, [recipe_id])

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
        <SubmitContainer>
          <Link to={`/editRecipe/${recipe.id}`}>Alterar</Link>
        </SubmitContainer>
      </RecipeContainer>
    )
  }
  return <Loading />
}

export default RecipeDetails
