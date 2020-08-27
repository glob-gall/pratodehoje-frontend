import React, { useState, useCallback, useEffect, HTMLAttributes } from 'react'

import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi'
import {
  RecipeList,
  RecipesNotFound,
  Recipe,
  ContainerPagination,
  IngredientsContainer,
} from './styles'
import RecipeNotFound from '../../images/pizza-slice.svg'
import ComidaImg from '../../images/comida.png'
import IngredientCard from '../IngredientCard'

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
interface recipesListProps extends HTMLAttributes<HTMLDivElement> {
  recipesProps: IRecipe[]
}

const RecipesList: React.FC<recipesListProps> = ({ recipesProps }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [itemsPerPage, _] = useState(4)
  const [recipesToList, setRecipesToList] = useState<IRecipe[]>([])
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  useEffect(() => {
    setRecipes(recipesProps)
    setCurrentPage(1)
  }, [recipesProps])

  const prevPage = useCallback(() => {
    setCurrentPage(state => (state === 1 ? state : state - 1))
  }, [])
  const nextPage = useCallback(() => {
    setCurrentPage(state =>
      state === Math.ceil(recipes.length / 4) ? state : state + 1,
    )
  }, [recipes.length])
  const gotoLastPage = useCallback(() => {
    setCurrentPage(totalPages)
  }, [totalPages])

  useEffect(() => {
    setTotalPages(Math.ceil(recipes.length / 4))
    const page = currentPage - 1
    const start = page * itemsPerPage
    const end = start + itemsPerPage

    setRecipesToList(recipes.slice(start, end))
  }, [recipes, currentPage, itemsPerPage])

  return (
    <>
      <h3>
        {recipes.length === 1
          ? `${recipes.length} resultado`
          : `${recipes.length} resultados`}
      </h3>
      <RecipeList>
        {recipes.length > 4 && (
          <ContainerPagination>
            <div>
              <button type="button" onClick={() => setCurrentPage(1)}>
                <FiChevronsLeft size={32} />
              </button>
              <button type="button" onClick={() => prevPage()}>
                <FiChevronLeft size={28} />
              </button>
            </div>
            <span>{`${currentPage}/${totalPages}`}</span>
            <div>
              <button type="button" onClick={() => nextPage()}>
                <FiChevronRight size={28} />
              </button>
              <button type="button" onClick={() => gotoLastPage()}>
                <FiChevronsRight size={32} />
              </button>
            </div>
          </ContainerPagination>
        )}
        {recipes.length !== 0 ? (
          recipesToList.map(recipe => (
            <Recipe key={recipe.id} to={`/${recipe.id}`}>
              <img src={ComidaImg} alt="" />
              <div>
                <h3>{recipe.name}</h3>
                <IngredientsContainer>
                  <p>Ingredientes</p>
                  <div>
                    {recipe.ingredients.map(ingredient => (
                      <IngredientCard
                        key={ingredient.id}
                        message={ingredient.name}
                      />
                    ))}
                  </div>
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
        {recipes.length > 4 && (
          <ContainerPagination>
            <div>
              <button type="button" onClick={() => setCurrentPage(1)}>
                <FiChevronsLeft size={32} />
              </button>
              <button type="button" onClick={() => prevPage()}>
                <FiChevronLeft size={28} />
              </button>
            </div>
            <span>{`${currentPage}/${totalPages}`}</span>
            <div>
              <button type="button" onClick={() => nextPage()}>
                <FiChevronRight size={28} />
              </button>
              <button type="button" onClick={() => gotoLastPage()}>
                <FiChevronsRight size={32} />
              </button>
            </div>
          </ContainerPagination>
        )}
      </RecipeList>
    </>
  )
}

export default RecipesList
