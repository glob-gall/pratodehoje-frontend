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
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  position: relative;
`
export const Progress = styled.div<stepProps>`
  display: block;
  background: #dadada;
  height: 5px;
  border-radius: 10px;
  margin: 4px 8px;
  div {
    background: #65bf39;
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

  strong {
    font-size: 18px;
    font-weight: bold;
    margin-left: 4px;
  }

  div {
    display: flex;

    justify-content: center;
    div {
      margin: 0 8px;
      flex-direction: column;
      label {
        /* margin-top: 24px;
        margin-left: 8px; */
        margin: 24px 0 8px 8px;
      }
      div {
      }
      & + div {
        width: 34%;
        margin-left: 4px;
      }
    }
  }
`

export const DragAndDrop = styled.div`
  height: 224px;
  margin: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px dashed #65bf39;
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
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  button {
    display: flex;
    background: #7dcc57;
    font-size: 16px;
    align-items: center;
    border: none;
    padding: 8px;
    border-radius: 8px;
    color: #fff;
    margin: 10px auto 24px;
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
  margin: 0 16px;
  margin-top: 35px;
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
    background: #69b645;
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

export const MethodList = styled.div`
  ul {
    margin: 8px 16px;
    background: #e8e8e8;
    list-style: none;
    border-radius: 10px;
    padding: 10px;
    min-height: 54px;
    li {
      display: flex;
      word-break: break-all;
      margin: 10px;
      font-size: 18px;
      height: 36px;
      button {
        background: transparent;
        border: none;
        margin-left: auto;
      }
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
  height:446px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 36px;
    margin-top: 24px;
    font-weight: bold;
  }
  span {
    margin: 8px 36px;
    text-align: center;
    color: #6c6c80;
    font-weight: bold;
  }
  a {
    background: #43abf6;
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
      background: #1d95ec;
    }
  }
  strong {
    margin: auto auto 24px;
    color: #69b645;
    cursor: pointer;
    height: 20px;
    display: flex;
    align-items: center;
    &:hover {
      color: #5b9751;
    }
  }
`
