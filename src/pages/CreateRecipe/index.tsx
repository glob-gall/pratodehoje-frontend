import React, { useState, useCallback, ChangeEvent } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiX,
  FiCheck,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {
  Container,
  GridContainer,
  Form,
  Progress,
  FirstStep,
  DragAndDrop,
  ContainerButtons,
  SecondStep,
  IngredientsList,
  InputAdditems,
  MethodList,
  ThirdStep,
} from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import IngredientCard from '../../components/IngredientCard'

import api from '../../services/api'

const CreateRecipe: React.FC = () => {
  const [progress, setProgress] = useState(34)
  const [step, setStep] = useState(1)

  const [ingredients, setIngredients] = useState<string[]>([])
  const [method, setMethod] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState('')
  const [hasError, setError] = useState(false)
  const [newMethod, setNewMethod] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const createRecipe = useCallback(async () => {
    const recipe = {
      name,
      time,
      method,
      ingredientsNames: ingredients,
      equipaments: '',
      image_url: '',
    }
    if (
      name === '' ||
      time === '' ||
      method.length === 0 ||
      ingredients.length === 0
    ) {
      setError(true)
      return
    }
    await api.post('/recipes', recipe)
  }, [name, time, method, ingredients])

  const handleAddIngredient = useCallback(() => {
    if (newIngredient === '') {
      return
    }

    setNewIngredient('')
    setIngredients(state => [...state, newIngredient])
  }, [newIngredient])

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

    setNewMethod('')
    setMethod(state => [...state, newMethod])
  }, [newMethod])
  const handleRemoveMethod = useCallback((methodRemove: string) => {
    setMethod(state => {
      const filtred = state.filter(methodStep => methodStep !== methodRemove)
      return filtred
    })
  }, [])

  const changeTime = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value, 10) < 0) {
      setTime('')
      return
    }
    setTime(e.target.value)
  }, [])

  const prevStep = useCallback(() => {
    if (step === 1) return

    setStep(step - 1)
    setProgress(progress - 33)
  }, [step, progress])

  const nextStep = useCallback(() => {
    if (step === 3) return
    setStep(step + 1)
    setProgress(progress + 33)
  }, [step, progress])

  return (
    <GridContainer>
      <Header page="createRecipe" />
      <Container>
        <Form>
          <Progress progress={progress}>
            <div />
          </Progress>
          <FirstStep step={step}>
            <div>
              <div>
                <label htmlFor="name-field">
                  <strong>Nome da Receita</strong>
                </label>
                <Input
                  value={name}
                  inputOnChange={e => setName(e.target.value)}
                  placeholder="digite o nome da receita"
                  hasError={hasError}
                />
              </div>
              <div>
                <label htmlFor="time-field">
                  <strong>Tempo de Preparo</strong>
                </label>
                <Input
                  value={time}
                  hasError={hasError}
                  inputOnChange={changeTime}
                  placeholder="ex:120"
                />
              </div>
            </div>
            <DragAndDrop>
              <label htmlFor="image-field">
                Selecione ou arraste o arquivo aqui
              </label>
              <input
                id="image-field"
                name="image"
                type="file"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </DragAndDrop>
            <ContainerButtons>
              <button
                type="button"
                onClick={() => {
                  nextStep()
                }}
              >
                proxima Etapa
                <FiChevronRight size={22} />
              </button>
            </ContainerButtons>
          </FirstStep>
          <SecondStep step={step}>
            <InputAdditems>
              <Input
                hasError={hasError}
                value={newIngredient}
                inputOnChange={e => setNewIngredient(e.target.value)}
                placeholder="digite o nome de um ingrediente"
                icon={FiPlus}
                iconColor="#69B645"
                onClickButton={handleAddIngredient}
                inputOnKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddIngredient()
                }}
                // hasError={hasError}
              />
            </InputAdditems>
            <strong>Ingredientes</strong>
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
            <InputAdditems>
              <Input
                hasError={hasError}
                placeholder="digite a receita passo a passo"
                value={newMethod}
                inputOnChange={e => setNewMethod(e.target.value)}
                icon={FiPlus}
                iconColor="#69B645"
                inputOnKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddMethod()
                }}
                onClickButton={handleAddMethod}
              />
            </InputAdditems>
            <MethodList>
              <strong>Modo de preparo</strong>
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
            <ContainerButtons>
              <button
                type="button"
                onClick={() => {
                  prevStep()
                }}
              >
                <FiChevronLeft size={22} />
                Etapa Anterior
              </button>
              <button
                type="button"
                onClick={() => {
                  nextStep()
                }}
              >
                proxima Etapa
                <FiChevronRight size={22} />
              </button>
            </ContainerButtons>
          </SecondStep>
          <ThirdStep step={step}>
            <p>RECEITA CRIADA!</p>
            <FiCheck size={256} color="#7dcc57" />
            <span>
              sua receita esta pronta, para confirmar seu cadastro clique no
              botão a baixo
            </span>
            <button type="button" onClick={() => createRecipe()}>
              Cadastrar Receita
            </button>
            <ContainerButtons>
              <strong
                role="none"
                onClick={() => {
                  prevStep()
                }}
              >
                <FiChevronLeft size={18} />
                Caso queira alterar sua receita clique aqui
              </strong>
            </ContainerButtons>
          </ThirdStep>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default CreateRecipe
