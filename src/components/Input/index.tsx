/* eslint-disable jsx-a11y/label-has-for */
import React, { InputHTMLAttributes, useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { Container, SpanError } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, label, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused} hasError={!!error}>
      <label>{label || name}</label>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {Icon && <Icon size={24} color="#fff" />}
      <SpanError>{error}</SpanError>
    </Container>
  )
}

export default Input
