import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import RecipeNotFound from '../../images/recipeNotFound.svg'
import api from '../../services/api'
import ComidaImg from '../../images/comida.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Container,
  ContainerFeed,
  Search,
  IngredientsContainer,
  IngredientsList,
  RecipeList,
  RecipesNotFound,
  Recipe,
  EquipamentsList,
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
  const [requireds, setRequireds] = useState([
    'fogão',
    'Forno',
    'Churrasqueira',
    'Grill',
    'Micro-ondas',
    'Geladeira',
    'Freezer',
    'Liquidificador',
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   async function loadRecipes() {
  //     const response = await api.get('/recipes/all')
  //     setRecipes(response.data)
  //   }

  //   loadRecipes()
  // }, [])
  useEffect(() => {
    async function loadRecipesByIngredients() {
      if (ingredients.length > 0) {
        const response = await api.post('/recipes/ingredients', { ingredients })
        console.log(response.data)
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
      console.log('no ingredient found')
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
    <>
      <Header />
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
          <h3>
            {recipes.length === 1
              ? `${recipes.length} resultado`
              : `${recipes.length} resultados`}
          </h3>
          <RecipeList>
            {recipes.length !== 0 ? (
              recipes.map(recipe => (
                <Recipe key={recipe.id}>
                  <img src={ComidaImg} alt="" />
                  <div>
                    <h3>{recipe.name}</h3>
                    <IngredientsContainer>
                      <p>Ingredientes</p>
                      <ul>
                        {recipe.ingredients.map(ingredient => (
                          <li key={ingredient.id}>{ingredient.name}</li>
                        ))}
                      </ul>
                    </IngredientsContainer>
                  </div>
                </Recipe>
              ))
            ) : (
              <RecipesNotFound>
                <img src={RecipeNotFound} alt="recipe not found" />
                <p>nenhuma receita encontrada</p>
              </RecipesNotFound>
            )}
          </RecipeList>
        </ContainerFeed>
      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
