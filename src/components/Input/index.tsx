import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon?: React.ComponentType<IconBaseProps>
  iconColor?: string
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon: Icon,
  iconColor = '#fff',
  ...rest
}) => {
  return (
    <Container hasIcon={!!Icon} iconColor={iconColor}>
      <input type="text" placeholder={placeholder} />
      {Icon && (
        <button type="button">
          <Icon size={24} color="#fff" />
        </button>
      )}
    </Container>
  )
}

export default Input
