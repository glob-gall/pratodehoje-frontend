import React, { useState, useCallback, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import RecipesList from '../../components/RecipesList'
import IngredientCard from '../../components/IngredientCard'
import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
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
  const [newIngredient, setNewIngredient] = useState('')
  const [hasError, setHasError] = useState(false)
  const [recipes, setRecipes] = useState<IRecipe[]>([])

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
    setNewIngredient('')
    if (newIngredient === '' || newIngredient.includes(' ')) {
      setHasError(true)
      return
    }

    setIngredients(state => [...state, newIngredient])
    setHasError(false)
  }, [newIngredient])

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
              <Input
                value={newIngredient}
                inputOnChange={e => setNewIngredient(e.target.value)}
                placeholder="digite o nome de um ingrediente..."
                icon={FaSearch}
                iconColor="#69B645"
                onClickButton={handleAddIngredient}
                inputOnKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddIngredient()
                }}
                hasError={hasError}
              />
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
      <Footer />
    </GridContainer>
  )
}

export default Dashboard
