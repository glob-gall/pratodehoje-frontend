import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'

import api from '../../services/api'
import ComidaImg from '../../images/comida.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Container,
  ContainerFeed,
  Search,
  IngredientsList,
  RecipeList,
  EquipamentsList,
} from './styles'

interface IRecipe {
  id: string
  name: string
  image_url: string
  ingredients: string[]
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

  useEffect(() => {
    async function loadRecipes() {
      const response = await api.get('/recipes')
      setRecipes(response.data)
    }

    loadRecipes()
  }, [])

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
  useEffect(() => {
    setRecipes(state =>
      state.filter(recipe =>
        ingredients.every(ingredient =>
          recipe.ingredients.includes(ingredient),
        ),
      ),
    )
  }, [ingredients])

  return (
    <>
      <Header />
      <Container>
        <EquipamentsList>
          <h4>Você possui:</h4>
          <div>
            {requireds.map(required => (
              <div key={required}>
                <label htmlFor="a">
                  <input type="checkbox" />
                  {required}
                </label>
              </div>
            ))}
          </div>
        </EquipamentsList>
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
          <h3>1 Resultado</h3>
          <RecipeList>
            {recipes.map(recipe => (
              <div key={recipe.id}>
                <img src={ComidaImg} alt="" />
                <div>
                  <h3>{recipe.name}</h3>
                  <div>
                    <p>Ingredientes</p>
                    <ul>
                      {recipe.ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </RecipeList>
        </ContainerFeed>
      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
