import React, { useState, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  Container,
  GridContainer,
  Form,
  Progress,
  FirstStep,
  DragAndDrop,
  ContainerButtons,
  SecondStep,
} from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CreateRecipe: React.FC = () => {
  const [progress, setProgress] = useState(34)
  const [step, setStep] = useState(1)

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
          <SecondStep step={step} />
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
