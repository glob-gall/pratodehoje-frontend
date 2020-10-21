import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import { FiImage, FiLogOut } from 'react-icons/fi'

import api from '../../services/api'
import backgroundImg from '../../images/comida.png'
import {
  ProfileContainer,
  TitleContainer,
  RecipesContainer,
  Recipe,
  ImageUpload,
  LogOutButton,
  Container,
} from './styles'
import { useAuth } from '../../hooks/auth'
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
  equipaments: string
}
interface IUser {
  id: string
  name: string
  email: string
  avatar_url: string
  recipes: IRecipe[]
}

const UserDetails: React.FC = () => {
  const auth = useAuth()
  const { updateUser, signUp } = useAuth()

  const [user, setUser] = useState({} as IUser)
  const [loadingImageChange, setLoadingImageChange] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setLoadingImageChange(true)

      if (!e.target.files) {
        console.error('image not found')
        setLoadingImageChange(false)
        return
      }
      const data = new FormData()

      const file = e.target.files[0]

      data.append('avatar', file)

      const response = await api.patch('users/avatar', data)
      const updatedUser = response.data
      updateUser(updatedUser)
      setUser(updatedUser)
      setLoadingImageChange(false)
    },
    [updateUser],
  )

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${auth.user.id}`)
      setUser(response.data)

      setLoaded(true)
    }
    loadUser()
  }, [auth.user.id])

  if (loaded) {
    return (
      <Container>
        <LogOutButton type="button" onClick={signUp}>
          Sair
          <FiLogOut size={24} />
        </LogOutButton>
        <ProfileContainer>
          <TitleContainer>
            <ImageUpload>
              {user.avatar_url ? (
                <img src={user.avatar_url} alt="avatar-user" />
              ) : (
                <img src={backgroundImg} alt="recipe" />
              )}
              <label htmlFor="avatar">
                <FiImage size={36} color="#eee" />
              </label>
              <input
                type="file"
                id="avatar"
                accept=".png,.jpg"
                onChange={e => handleAvatarChange(e)}
              />
              {loadingImageChange && <Loading />}
            </ImageUpload>
            <div className="right">
              <h2>{user.name}</h2>
              <textarea
                disabled
                value="Em breve disponivel para alterações..."
              />
            </div>
          </TitleContainer>
          <RecipesContainer>
            {user.recipes.map(recipe => (
              <Recipe key={recipe.id} to={`/me/${recipe.id}`}>
                {recipe.avatar_url ? (
                  <img src={recipe.avatar_url} alt="avatar-user" />
                ) : (
                  <img src={backgroundImg} alt="recipe" />
                )}
                <h4>{recipe.name}</h4>
              </Recipe>
            ))}
          </RecipesContainer>
        </ProfileContainer>
      </Container>
    )
  }
  return <Loading />
}

export default UserDetails
