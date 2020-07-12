import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FiX, FiSearch } from 'react-icons/fi'

import api from '../../services/api'
import ComidaImg from '../../images/comida.png'
import Header from '../../components/Header'
import {
  Container,
  ContainerFeed,
  Search,
  InputContainer,
  IngredientsList,
  RecipeList,
  EquipamentsList,
} from './styles'

interface IRecipe {
  id: string
  name: string
  image_url: string
  ingredients: string
  equipaments: string
}
interface IIngredient {
  id: number
  name: string
}

const Dashboard: React.FC = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([])
  const [recipes, setRecipes] = useState<IRecipe[]>([])
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

    const newIngredient: IIngredient = {
      id: ingredients.length + 1,
      name: inputRef.current.value,
    }
    setIngredients([...ingredients, newIngredient])

    inputRef.current.value = ''
  }, [ingredients])

  const handleRemoveIngredient = useCallback(
    (id: number) => {
      setIngredients(ingredients.filter(ingredient => ingredient.id !== id))
    },
    [ingredients],
  )

  return (
    <>
      <Header />
      <Container>
        <EquipamentsList>
          <h4>Você possui:</h4>
          <div>
            <div>
              <label htmlFor="a">
                <input type="checkbox" />
                Fogão
              </label>
            </div>
            <div>
              <label htmlFor="b">
                <input type="checkbox" />
                Forno
              </label>
            </div>
            <div>
              <label htmlFor="c">
                <input type="checkbox" />
                Churrasqueira
              </label>
            </div>
            <div>
              <label htmlFor="d">
                <input type="checkbox" />
                Grill
              </label>
            </div>
            <div>
              <label htmlFor="e">
                <input type="checkbox" />
                Micro-ondas
              </label>
            </div>
            <div>
              <label htmlFor="f">
                <input type="checkbox" />
                Geladeira
              </label>
            </div>
            <div>
              <label htmlFor="g">
                <input type="checkbox" />
                Freezer
              </label>
            </div>
            <div>
              <label htmlFor="h">
                <input type="checkbox" />
                Liquidificador
              </label>
            </div>
          </div>
        </EquipamentsList>
        <ContainerFeed>
          <Search>
            <h2>Pesquise pelo nome dos ingedientes que você tem em casa</h2>
            <InputContainer>
              <input
                placeholder="digite o nome de um ingrediente..."
                ref={inputRef}
                onKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddIngredient()
                }}
              />

              <button type="button" onClick={() => handleAddIngredient()}>
                <FiSearch color="#000" size={18} />
              </button>
            </InputContainer>
          </Search>
          <IngredientsList>
            {ingredients.map(ingredient => (
              <div key={ingredient.id}>
                <p>{ingredient.name}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveIngredient(ingredient.id)
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
                  <p>Ingredientes</p>
                  <ul>
                    {recipe.ingredients.split(',').map(ingredient => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </RecipeList>
        </ContainerFeed>
      </Container>
    </>
  )
}

export default Dashboard
