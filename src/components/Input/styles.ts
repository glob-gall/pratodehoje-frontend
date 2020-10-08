import styled, { css } from 'styled-components'

interface containerProps {
  isFocused?: boolean
  hasError: boolean
}

export const Container = styled.div<containerProps>`
  position: relative;

  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  height: 45px;
  border: 2px solid #efeeee;
  ${props =>
    props.hasError &&
    css`
      border-color: #ff4949;
    `}
  ${props =>
    props.isFocused &&
    css`
      -webkit-box-shadow: 0px 0px 8px 4px rgba(128, 191, 237, 1);
      -moz-box-shadow: 0px 0px 8px 4px rgba(128, 191, 237, 1);
      box-shadow: 0px 0px 8px 4px rgba(128, 191, 237, 1);
    `}
  input {
    border-radius: 10px;
    font-size: 18px;
    border: none;
    color: #535353;
    padding: 0 16px;
    width: 100%;
  }
  transition: background-color 0.5s;

  label {
    position: absolute;
    font-size: 20px;
    color: #646464;

    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    left: 5px;
    top: -32px;
  }

  /* & + & { */
  margin-top: 36px;
  /* } */
`
export const SpanError = styled.span`
  position: absolute;
  top: 110%;
  left: 5px;

  font-size: 12px;
  color: #db3a3a;
`
