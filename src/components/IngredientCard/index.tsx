import React from 'react'
import { FiX } from 'react-icons/fi'
import { Container } from './styles'

interface ingredientsProps {
  message: string
  hasDeleteButton?: boolean
  onClickButton?: () => void
}

const IngredientCard: React.FC<ingredientsProps> = ({
  message,
  hasDeleteButton,
  onClickButton = () => '',
}) => {
  return (
    <Container>
      {message}
      {hasDeleteButton && (
        <button type="button" onClick={onClickButton}>
          <FiX color="#fff" size={18} />
        </button>
      )}
    </Container>
  )
}

export default IngredientCard
