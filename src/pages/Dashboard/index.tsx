import React, { useState, useCallback, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import RecipesList from '../../components/RecipesList'
import IngredientCard from '../../components/IngredientCard'
import api from '../../services/api'

import { Container, ContainerFeed, Search, IngredientsList } from './styles'

interface Ingredient {
  id: string
  name: string
}
interface IRecipe {
  id: string
  name: string
  image_url: string
  ingredients: Ingredient[]
  equipaments: string
}

const Dashboard: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState('')
  // const [hasError, setHasError] = useState(false)
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    async function loadRecipesByIngredients() {
      if (ingredients.length > 0) {
        const response = await api.post('/recipes/ingredients', { ingredients })
        setRecipes(response.data)
      } else {
        const response = await api.get('/recipes/')
        setRecipes(response.data)
      }
    }

    loadRecipesByIngredients()
  }, [ingredients])

  const handleAddIngredient = useCallback(() => {
    setNewIngredient('')
    if (newIngredient === '' || newIngredient.includes(' ')) {
      // setHasError(true)
      return
    }

    if (ingredients.includes(newIngredient)) {
      return
    }

    setIngredients(state => [...state, newIngredient])
    // setHasError(false)
  }, [newIngredient, ingredients])

  const handleRemoveIngredient = useCallback((ingredientRemove: string) => {
    setIngredients(state =>
      state.filter(ingredient => ingredient !== ingredientRemove),
    )
    // ingredients.filter(ingredient => ingredient !== ingredientRemove),
  }, [])

  return (
    <Container>
      <ContainerFeed>
        <Search>
          <h2>Pesquise pelo nome dos ingedientes que você tem em casa</h2>
          <div>
            <input
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
              placeholder="digite o nome de um ingrediente..."
              onKeyUp={e => {
                return (e.which || e.keyCode) === 13 && handleAddIngredient()
              }}
            />
            <button type="button" onClick={handleAddIngredient}>
              <FaSearch size={24} color="#fff" />
            </button>
          </div>
        </Search>
        <IngredientsList>
          {ingredients.map(ingredient => (
            <IngredientCard
              key={ingredient}
              hasDeleteButton
              message={ingredient}
              onClickButton={() => {
                handleRemoveIngredient(ingredient)
              }}
            />
          ))}
        </IngredientsList>
        <RecipesList recipesProps={recipes} />
      </ContainerFeed>
    </Container>
  )
}

export default Dashboard
