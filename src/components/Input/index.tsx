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
  animationOn?: boolean
  onClickButton?: () => void
  inputOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
  inputOnKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon: Icon,
  iconColor = '#81e251',
  hasError = false,
  animationOn = false,
  onClickButton = () => '',
  inputOnChange,
  inputOnKeyUp,
  value,
  type = 'text',
  ...rest
}) => {
  const [focused, setFocused] = useState(false)
  return (
    <Container
      hasIcon={!!Icon}
      iconColor={iconColor}
      hasError={hasError}
      hasFocused={focused}
      animationOn={animationOn}
    >
      <input
        type={type}
        value={value}
        onChange={inputOnChange}
        onKeyUp={inputOnKeyUp}
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
