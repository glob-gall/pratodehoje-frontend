import React, { useState, useCallback, ChangeEvent } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiX,
  FiCheck,
} from 'react-icons/fi'
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
  const [hasNameError, setNameError] = useState(false)
  const [hasTimeError, setTimeError] = useState(false)
  const [hasIngredientError, setIngredientError] = useState(false)
  const [hasMethodError, setMethodError] = useState(false)
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
    const { value } = e.target
    const hasLetters = /[^0-9]/.test(value)

    if (hasLetters) {
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

  const validateFirstStep = useCallback(() => {
    setNameError(false)
    setTimeError(false)
    if (name === '') {
      setNameError(true)
    }
    if (time === '') {
      setTimeError(true)
    }
    if (name !== '' && time !== '') {
      nextStep()
    }
  }, [name, time, nextStep])

  const validateSecondStep = useCallback(() => {
    setIngredientError(false)
    setMethodError(false)

    if (ingredients.length === 0) {
      setIngredientError(true)
    }
    if (method.length === 0) {
      setMethodError(true)
    }
    if (ingredients.length !== 0 && method.length !== 0) {
      nextStep()
    }
  }, [ingredients, method, nextStep])

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
                  hasError={hasNameError}
                />
              </div>
              <div>
                <label htmlFor="time-field">
                  <strong>Tempo de Preparo</strong>
                </label>
                <Input
                  value={time}
                  hasError={hasTimeError}
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
                  validateFirstStep()
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
                hasError={hasIngredientError}
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
            <div>
              <strong>Ingredientes</strong>
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
            <InputAdditems>
              <Input
                hasError={hasMethodError}
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
                  validateSecondStep()
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
