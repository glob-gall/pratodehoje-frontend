import styled, { css } from 'styled-components'

interface stepProps {
  progress: number
}
interface formProps {
  step: number
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
`
export const Form = styled.form`
  margin: 48px auto;
  width: 500px;
  min-height: 400px;
  background: #fff;
  border-radius: 10px;
  display: inline-block;
`
export const Progress = styled.div<stepProps>`
  display: block;
  background: #dadada;
  height: 5px;
  border-radius: 10px;
  margin: 4px 8px;
  div {
    background: #41c900;
    height: 5px;
    width: ${props => props.progress && `${props.progress}%`};
    border-radius: 10px;
  }
`
export const FirstStep = styled.div<formProps>`
  display: none;
  ${props =>
    props.step === 1 &&
    css`
      display: initial;
    `}
  margin: 8px;
  div {
    display: flex;
    div {
      width: 100%;
      flex-direction: column;
      font-size: 16px;
      margin: 0 16px;
      label {
        margin-top: 36px;
        margin-left: 8px;
      }
      input {
        margin-top: 4px;
        border: 2px solid #dadada;
        border-radius: 8px;
        height: 36px;

        padding-top: 8px;
        font-size: 16px;
      }
      & + div {
        width: 34%;
        margin-left: 4px;
      }
    }
  }
`

export const DragAndDrop = styled.div`
  height: 200px;
  margin: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px dashed #7dcc57;
  label {
    width: 100%;
    height: 80%;
    background: #fff;
    text-align: center;
    justify-content: center;
    padding-top: 16%;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;

  button {
    display: flex;
    background: #41c900;
    font-size: 16px;
    align-items: center;
    border: none;
    padding: 8px;
    border-radius: 8px;
    color: #fff;
  }
`
export const SecondStep = styled.div<formProps>`
  display: none;
  ${props =>
    props.step === 2 &&
    css`
      display: initial;
    `}
  height: 25px;
  width: 25px;
  background: red;
`
