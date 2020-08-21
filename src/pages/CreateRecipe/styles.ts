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
  margin: 16px;

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
  strong {
    margin: 25px;
    font-size: 18px;
  }
  display: none;
  ${props =>
    props.step === 2 &&
    css`
      display: block;
    `}
  min-height: 300px;
`
export const InputAdditems = styled.div`
  border: 2px solid #dadada;
  border-radius: 8px;
  margin: 0 16px;
  margin-top: 35px;
  margin-bottom: 24px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  height: 45px;
  /* box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2); */
  background: #1cca00;
  input {
    width: 90%;
    padding: 20px 20px 10px 10px;
    border-radius: 0;
    font-size: 16px;

    border: none;
  }
  button {
    width: 10%;
    height: 45px;
    border: none;
    border-radius: 0;
    background: #1cca00;
  }
`

export const IngredientsList = styled.div`
  margin: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  background: #e8e8e8;
  min-height: 54px;
  border-radius: 8px;
  div {
    align-items: center;
    display: flex;
    margin: 5px;
    background: #41c900;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    button {
      margin-left: 5px;
      background: transparent;
      border: 0;
    }
  }
`

export const MethodContainer = styled.div`
  ul {
    margin: 8px 16px;
    background: #e8e8e8;
    list-style: none;
    border-radius: 10px;
    padding: 10px;
    min-height: 54px;
    li {
      margin: 10px;
      font-size: 19px;
    }
  }
`

export const ThirdStep = styled.div<formProps>`
  display: none;
  ${props =>
    props.step === 3 &&
    css`
      display: flex;
    `}
  flex-direction:column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 36px;
    margin-top: 32px;
    font-weight: bold;
  }
  a {
    background: #ff6242;
    border-radius: 10px;
    width: 368px;
    height: 56px;
    text-align: center;
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    padding: 12px;
    &:hover {
      color: #ddd;
      background: #d95237;
    }
  }
`
