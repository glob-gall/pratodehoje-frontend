import styled, { keyframes } from 'styled-components'
import { Form as FormUnform } from '@unform/web'

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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  flex-direction: column;
  margin-top: 36px;
  h1 {
    max-width: 600px;
    text-align: center;
  }
`
export const Form = styled(FormUnform)`
  width: 90%;
  max-width: 400px;

  margin-top: 24px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 16px;

  div:nth-child(2) {
    margin-top: 36px;
  }
  strong {
    margin: 0 16px;
  }
  p {
    color: #80bfed;
  }

  animation: ${pageInAnimation} 0.8s normal ease;
`

export const Button = styled.button`
  text-align: center;
  background: #69b645;

  margin-top: 36px;
  border: none;
  padding: 12px;
  border-radius: 10px;
  color: #f2f2f2;
  font-size: 24px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    background: #4e8c31;
  }
`

export const IngredientsList = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  background: #e8e8e8;
  min-height: 54px;
  border-radius: 8px;
`

export const MethodList = styled.div`
  ul {
    margin-top: 8px;
    background: #e8e8e8;
    list-style: none;
    border-radius: 10px;
    padding: 10px;
    min-height: 54px;
    li {
      animation: ${pageInAnimation} 0.8s normal ease;
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

export const InputList = styled.div`
  position: relative;

  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  height: 45px;
  border: 2px solid #efeeee;

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

  & + & {
    margin-top: 36px;
  }
`

export const SpanError = styled.span`
  position: absolute;
  top: 110%;
  left: 5px;

  font-size: 12px;
  color: #db3a3a;
`
export const RecipeImage = styled.div`
  margin-top: 24px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  p {
    position: absolute;
    color: #303030;
  }
  > div {
    width: 100%;
    height: 300px;
    /* display: flex; */
    /* justify-content: center; */

    border: 3px solid #e8e8e8;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
