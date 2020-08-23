import React, {
  InputHTMLAttributes,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon?: React.ComponentType<IconBaseProps>
  iconColor?: string
  hasError?: boolean
  value?: string
  onClickButton?: () => void
  inputOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
  inputOnKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon: Icon,
  iconColor = '#fff',
  hasError = false,
  onClickButton = () => '',
  inputOnChange,
  inputOnKeyUp,
  value,
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
        value={value}
        onChange={inputOnChange}
        onKeyUp={inputOnKeyUp}
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
        <button
          type="button"
          onClick={() => {
            onClickButton()
          }}
        >
          <Icon size={24} color="#fff" />
        </button>
      )}
    </Container>
  )
}

export default Input
