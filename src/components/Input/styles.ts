import styled, { css } from 'styled-components'

interface containerProps {
  hasIcon: boolean
  iconColor: string
  hasFocused: boolean
  hasError: boolean
}
export const Container = styled.div<containerProps>`
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  height: 45px;
  border: 2px solid #efeeee;
  ${props =>
    props.hasError &&
    css`
      border: 2px solid #f63440;
    `}
  ${props =>
    props.hasFocused &&
    css`
      border: 2px solid #65bf39;
    `}
  input {
    flex: 1;
    font-size: 18px;
    border: none;
    color: #535353;
    padding: 0 16px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    ${props =>
      !props.hasIcon &&
      css`
        border-radius: 8px;
      `}
  }
  transition: background-color 0.5s;
  button {
    width: 49px;
    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    background: ${props => props.iconColor};

    ${props =>
      props.hasError &&
      css`
        background: #f63440;
      `}
    ${props =>
      props.hasFocused &&
      css`
        background: ${props.iconColor};
      `}
      transition: background-color 0.2s;
  }
`
