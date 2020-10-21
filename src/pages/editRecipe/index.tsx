/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'

import { FiX } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { useHistory, useParams } from 'react-router-dom'
import {
  Container,
  Form,
  Button,
  IngredientsList,
  MethodList,
  RecipeImage,
} from './styles'
import Input from '../../components/Input'
import InputImage from '../../components/InputImage'
import IngredientCard from '../../components/IngredientCard'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'
import Loading from '../../components/Loading'
import defaultImage from '../../images/comida.png'

interface SubmitProps {
  name: string
  time: number
  file: File
}
interface IIngredient {
  id: string
  name: string
}

interface IRecipe {
  name: string
  time: number
  ingredients: IIngredient[]
  method: string[]
  avatar_url: string
}
interface IParams {
  recipe_id: string
}
const EditRecipe: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [loaded, setLoaded] = useState(false)
  const [initialRecipe, setInitialRecipe] = useState<IRecipe>({} as IRecipe)
  const [ingredients, setIngredients] = useState<string[]>([])
  const [method, setMethod] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState('')
  const [newMethod, setNewMethod] = useState('')
  const { recipe_id } = useParams<IParams>()

  useEffect(() => {
    const loadRecipe = async () => {
      const response = await api.get(`/recipes/${recipe_id}`)
      setInitialRecipe(response.data)
    }

    loadRecipe()
    setLoaded(true)
  }, [recipe_id])
  useEffect(() => {
    if (initialRecipe.name) {
      const ingredientsNames = initialRecipe.ingredients.map(
        ingredient => ingredient.name,
      )
      setIngredients(ingredientsNames)

      setMethod(initialRecipe.method)
    }
  }, [initialRecipe])

  const history = useHistory()

  const handleAddIngredient = useCallback(() => {
    const haveThisIngredient = ingredients.includes(newIngredient)
    if (haveThisIngredient || newIngredient === '') {
      setNewIngredient('')
      return
    }

    setNewIngredient('')
    setIngredients(state => [...state, newIngredient])
  }, [newIngredient, ingredients])

  const handleRemoveIngredient = useCallback((ingredientRemove: string) => {
    setIngredients(state => {
      const filtred = state.filter(
        ingredient => ingredient !== ingredientRemove,
      )
      return filtred
    })
  }, [])

  const handleAddMethod = useCallback(() => {
    if (newMethod === '') {
      return
    }
    const haveInMethod = method.find(step => step === newMethod)
    if (haveInMethod) {
      setNewMethod('')
      return
    }
    setNewMethod('')
    setMethod(state => [...state, newMethod])
  }, [newMethod, method])

  const handleRemoveMethod = useCallback((methodRemove: string) => {
    setMethod(state => {
      const filtred = state.filter(methodStep => methodStep !== methodRemove)
      return filtred
    })
  }, [])

  const handleSubmit = useCallback(
    async (data: SubmitProps) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          name: Yup.string().required('nome invalido'),
          time: Yup.string().required('tempo de preparo invalido'),
        })
        await schema.validate(data, { abortEarly: false })
        if (ingredients.length === 0) {
          throw new Error('RecipeWithNoIngredients')
        }
        if (method.length === 0) {
          throw new Error('RecipeWithNoMethod')
        }
        const { name, time, file } = data
        const recipe = {
          name,
          time,
          ingredientsNames: ingredients,
          method,
          id: recipe_id,
        }
        const response = await api.put('/recipes', recipe)

        if (data.file) {
          const formData = new FormData()
          formData.append('image_url', file)
          formData.append('recipe_id', response.data.id)
          await api.post('/recipes/changeImage', formData)
          history.push(`/me/${response.data.id}`)
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          return
        }

        if (err instanceof Error) {
          if (err.message === 'RecipeWithNoIngredients') {
            formRef.current?.setErrors({
              ingredients: 'a receita deve ter ao menos 1 ingrediente',
            })
          }
          if (err.message === 'RecipeWithNoMethod') {
            formRef.current?.setErrors({
              method: 'receita sem nenhum passo',
            })
          }
        }
        console.error(err)
      }
    },
    [ingredients, method, history, recipe_id],
  )

  if (!loaded) {
    return <Loading />
  }
  return (
    <Container>
      <h1>Você pode adicionar sua receita mais gostosa para todo mundo!</h1>
      <Form
        ref={formRef}
        onSubmit={data => handleSubmit(data)}
        initialData={{
          name: initialRecipe.name,
          time: initialRecipe.time,
          file: initialRecipe.avatar_url,
        }}
      >
        <button type="submit" disabled style={{ display: 'none' }} />
        <Input name="name" label="Nome da receita" />

        <Input
          name="time"
          label="Tempo em minutos"
          type="number"
          min="0"
          step="10"
        />

        <Input
          name="ingrediente"
          value={newIngredient}
          onChange={e => setNewIngredient(e.target.value)}
          placeholder="digite o nome de um ingrediente"
          onKeyUp={e => {
            return e.keyCode === 13 && handleAddIngredient()
          }}
        />
        <div>
          <strong>Lista de Ingredientes</strong>
          <p>(Aperte enter para adicionar um ingrediente)</p>
        </div>
        <IngredientsList>
          {ingredients.map(ingredient => (
            <IngredientCard
              key={ingredient}
              message={ingredient}
              onClickButton={() => {
                handleRemoveIngredient(ingredient)
              }}
              hasDeleteButton
            />
          ))}
        </IngredientsList>
        <Input
          name="method"
          label="Método de preparo"
          placeholder="digite a receita passo a passo"
          value={newMethod}
          onChange={e => setNewMethod(e.target.value)}
          onKeyUp={e => {
            return e.keyCode === 13 && handleAddMethod()
          }}
        />
        <MethodList>
          <div>
            <strong>Etapas</strong>
            <p>(Aperte enter para adicionar uma etapa)</p>
          </div>
          <ul>
            {method.map(methodStep => {
              const i = method.indexOf(methodStep) + 1

              return (
                <li key={i}>
                  {`${i} - ${methodStep}`}
                  <button
                    type="button"
                    onClick={() => {
                      handleRemoveMethod(methodStep)
                    }}
                  >
                    <FiX color="#333" size={22} />
                  </button>
                </li>
              )
            })}
          </ul>
        </MethodList>
        <RecipeImage>
          <p>Imagem atual</p>
          <div>
            {initialRecipe.avatar_url ? (
              <img src={initialRecipe.avatar_url} alt="" />
            ) : (
              <img src={defaultImage} alt="" />
            )}
          </div>
        </RecipeImage>
        <InputImage
          name="file"
          label="Escolher uma foto para a receita"
          type="file"
          accept=".jpg,.png"
        />
        <Button type="submit">Editar</Button>
      </Form>
    </Container>
  )
}

export default EditRecipe
