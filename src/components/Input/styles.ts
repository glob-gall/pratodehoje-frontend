import styled, { css } from 'styled-components'

interface containerProps {
  hasIcon: boolean
  iconColor: string
  hasFocused: boolean
  hasError: boolean
}
export const Container = styled.div<containerProps>`
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  height: 45px;
  border: 2px solid #efeeee;
  ${props =>
    props.hasError &&
    css`
      border: 2px solid #dd3434;
    `}
  ${props =>
    props.hasFocused &&
    css`
      border: 2px solid #41c900;
    `}
  input {
    flex: 1;
    border-radius: 0;
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
  button {
    width: 49px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background: ${props => props.iconColor};

    ${props =>
      props.hasError &&
      css`
        background: #dd3434;
      `}
    ${props =>
      props.hasFocused &&
      css`
        background: ${props.iconColor};
      `}
  }
`
