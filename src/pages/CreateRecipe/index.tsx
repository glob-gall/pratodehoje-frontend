import React, { useState, useCallback, useRef, ChangeEvent } from 'react'
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
  MethodContainer,
  ThirdStep,
} from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api'

const CreateRecipe: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputMethod = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState(34)
  const [step, setStep] = useState(1)

  const [ingredients, setIngredients] = useState<string[]>([])
  const [method, setMethod] = useState<string[]>([])
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
    if (!inputRef.current || inputRef.current.value === '') {
      return
    }

    const newIngredient = inputRef.current.value
    setIngredients([...ingredients, newIngredient])

    inputRef.current.value = ''
  }, [ingredients])
  const handleRemoveIngredient = useCallback((ingredientRemove: string) => {
    setIngredients(state => {
      const filtred = state.filter(
        ingredient => ingredient !== ingredientRemove,
      )
      return filtred
    })
  }, [])

  const handleAddMethod = useCallback(() => {
    if (!inputMethod.current || inputMethod.current.value === '') {
      return
    }

    const newMethod = inputMethod.current.value
    setMethod([...method, newMethod])

    inputMethod.current.value = ''
  }, [method])
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
                <input
                  id="name-field"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="time-field">
                  <strong>Tempo de Preparo</strong>
                </label>
                <input
                  id="time-field"
                  name="time"
                  type="number"
                  value={time}
                  onChange={changeTime}
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
              <input
                placeholder="digite o nome de um ingrediente..."
                ref={inputRef}
                onKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddIngredient()
                }}
              />

              <button type="button" onClick={() => handleAddIngredient()}>
                <FiPlus color="#fff" size={20} />
              </button>
            </InputAdditems>
            <strong>Ingredientes</strong>
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
            <InputAdditems>
              <input
                placeholder="digite a receita passo a passo..."
                ref={inputMethod}
                onKeyUp={e => {
                  return (e.which || e.keyCode) === 13 && handleAddMethod()
                }}
              />

              <button type="button" onClick={() => handleAddMethod()}>
                <FiPlus color="#fff" size={20} />
              </button>
            </InputAdditems>
            <MethodContainer>
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
                        <FiX color="#000" size={22} />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </MethodContainer>
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
            <FiCheck size={256} color="#39B100" />
            <span>
              sua receita esta pronta, para confirmar seu cadastro clique no
              botão a baixo
            </span>
            <Link to="/" onClick={() => createRecipe()}>
              Cadastrar Receita
            </Link>
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
            </ContainerButtons>
          </ThirdStep>
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default CreateRecipe
