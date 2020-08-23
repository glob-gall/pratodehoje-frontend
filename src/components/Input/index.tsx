import React, { InputHTMLAttributes, useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon?: React.ComponentType<IconBaseProps>
  iconColor?: string
  hasError?: boolean
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon: Icon,
  iconColor = '#fff',
  hasError = false,
  ...rest
}) => {
  const [focused, setFocused] = useState(false)
  return (
    <Container
      hasIcon={!!Icon}
      iconColor={iconColor}
      hasError={hasError}
      hasFocused={focused}
    >
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => {
          setFocused(true)
        }}
        onBlur={() => {
          setFocused(false)
        }}
      />
      {Icon && (
        <button type="button">
          <Icon size={24} color="#fff" />
        </button>
      )}
    </Container>
  )
}

export default Input
