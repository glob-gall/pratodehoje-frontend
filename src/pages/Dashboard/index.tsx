import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import RecipesList from '../../components/RecipesList'
import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  GridContainer,
  Container,
  ContainerFeed,
  Search,
  IngredientsList,
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
  equipaments: string
}

const Dashboard: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function loadRecipesByIngredients() {
      if (ingredients.length > 0) {
        const response = await api.post('/recipes/ingredients', { ingredients })
        setRecipes(response.data)
      } else {
        const response = await api.get('/recipes/all')
        setRecipes(response.data)
      }
    }

    loadRecipesByIngredients()
  }, [ingredients])

  const handleAddIngredient = useCallback(() => {
    if (!inputRef.current || inputRef.current.value === '') {
      return
    }

    const newIngredient = inputRef.current.value
    setIngredients([...ingredients, newIngredient])

    inputRef.current.value = ''
  }, [ingredients])

  const handleRemoveIngredient = useCallback(
    (ingredientRemove: string) => {
      setIngredients(
        ingredients.filter(ingredient => ingredient !== ingredientRemove),
      )
    },
    [ingredients],
  )

  return (
    <GridContainer>
      <Header page="dashboard" />
      <Container>
        <ContainerFeed>
          <Search>
            <h2>Pesquise pelo nome dos ingedientes que você tem em casa</h2>
            <div>
              <input
                placeholder="digite o nome de um ingrediente..."
                ref={inputRef}
                onKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddIngredient()
                }}
              />

              <button type="button" onClick={() => handleAddIngredient()}>
                <FaSearch color="#fff" size={20} />
              </button>
            </div>
          </Search>
          <IngredientsList>
            {ingredients.map(ingredient => (
              <div key={ingredient}>
                <p>{ingredient}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveIngredient(ingredient)
                  }}
                >
                  <FiX color="#fff" size={14} />
                </button>
              </div>
            ))}
          </IngredientsList>
          <RecipesList recipesProps={recipes} />
        </ContainerFeed>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Dashboard
