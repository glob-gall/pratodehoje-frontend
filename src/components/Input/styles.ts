import styled, { css } from 'styled-components'

interface containerProps {
  hasIcon: boolean
  iconColor: string
}
export const Container = styled.div<containerProps>`
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  height: 45px;
  background: ${props => props.iconColor};
  input {
    flex: 1;
    border-radius: 0;
    font-size: 18px;
    border: none;
    color: #535353;
    padding: 0 16px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  button {
    width: 45px;
    border: none;
    border-radius: 8px;
    background: ${props => props.iconColor};
  }
`
