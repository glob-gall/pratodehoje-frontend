import React, { useState, useCallback, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus, FiX } from 'react-icons/fi'
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
} from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CreateRecipe: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState(34)
  const [step, setStep] = useState(2)

  const [ingredients, setIngredients] = useState<string[]>([])
  const [method, setMethod] = useState<string[]>([])

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
                <label htmlFor="name-field">Nome da Receita</label>
                <input id="name-field" name="name" />
              </div>
              <div>
                <label htmlFor="time-field">Tempo de Preparo</label>
                <input id="time-field" name="time" />
              </div>
            </div>
            <DragAndDrop>
              <label htmlFor="image-field">
                Selecione ou arraste o arquivo aqui
              </label>
              <input id="image-field" name="image" type="file" />
            </DragAndDrop>
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
            <MethodContainer>
              <strong>Modo de preparo</strong>
              <ul>
                {method.map(methodStep => {
                  const i = method.indexOf(methodStep) + 1

                  return <li key={i}>{`${i} - ${methodStep}`}</li>
                })}
              </ul>
            </MethodContainer>
          </SecondStep>
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
        </Form>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default CreateRecipe
