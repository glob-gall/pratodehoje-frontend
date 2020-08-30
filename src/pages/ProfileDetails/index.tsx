import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipesList from '../../components/RecipesList'
import backgroundImg from '../../images/comida.png'
import {
  GridContainer,
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
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

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe)
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const loadRecipe = async () => {
      // const response = await api.get(`/recipes/${id}`)
      // setRecipe(response.data)
      setLoaded(true)
    }
    loadRecipe()
  }, [id])
  if (loaded) {
    return (
      <GridContainer>
        <Header page="dashboard" />
        <ProfileContainer>
          <TitleContainer>
            <div>
              <img src={backgroundImg} alt="recipe" />
            </div>
            <div>
              <h2>ipsum dolor sit amet consectetur vita</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ex hic dignissimos vitae, neque laudantium sunt error
                ducimus quae aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus cumque dolor a ex mollitia neque
                asperiores, esse reiciendis dolore recusandae culpa nisi
                repellendus sit. Eos corporis ducimus laudantium aspernatur
                expedita? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aut eos nisi eum, placeat, hic enim expedita excepturi
                esse autem molestias sunt quo libero quos quas ex. Illum dolores
                officia exercitationem?
              </p>
            </div>
          </TitleContainer>
          <RecipesContainer>
            <RecipesList recipesProps={[]} />
          </RecipesContainer>
        </ProfileContainer>
        <Footer />
      </GridContainer>
    )
  }
  return <h1>loading</h1>
}

export default RecipeDetails
