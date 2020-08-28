import styled, { css, keyframes } from 'styled-components'

interface stepProps {
  progress: number
}
interface formProps {
  step: number
}

const pageInAnimation = keyframes`
  from{
    transform:scale(0.9);
    opacity:0;
  }
  to{
    opacity:1;
    transform:scale(1);

  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
`
export const Form = styled.form`
  width: 490px;
  height: 380px;
  margin: 48px auto;
  background: #fff;
  border-radius: 10px;
  animation: ${pageInAnimation} 0.8s normal ease;

  h2 {
    text-align: center;
    margin-top: 22px;
  }
  label {
    margin: 24px 0 8px 8px;
  }

  > div {
    margin: 28px 16px;
    animation: ${pageInAnimation} 0.8s normal ease;
    div {
      margin-top: 8px;
    }
  }

  button {
    width: 100%;
    background: #43abf6;
    margin: 28px auto;
    border: none;
    border-radius: 10px;
    height: 56px;
    font-size: 28px;
    color: #fff;
    transition: background-color 0.2s;
    &:hover {
      background: #1d95ec;
    }
  }
`
