import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-flow: 90px 1fr 100px;
  margin: 0 50px;
`
const searchAnimation = keyframes`
  from{
    transform:scale(0.9);
    opacity:0;
  }
  to{
    opacity:1;
    transform:scale(1);

  }
`
export const ContainerFeed = styled.div`
  grid-column: 2/3;
  margin-top: 50px;
  > h3 {
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 25px;
    animation: ${searchAnimation} 0.8s normal ease;
  }
  > div {
    animation: ${searchAnimation} 0.8s normal ease;
  }
  @media (max-width: 836px) {
    grid-column: 1/4;
  }
`
const ingredientIn = keyframes`
  from{
    transform:translateX(100%)
  }
  to{
    transform:translateX(0%)
  }
`
export const Search = styled.div`
  text-align: center;
  h2 {
    margin: 24px;
  }

  div {
    width: 100%;
    display: flex;
    border: 2px solid #fff;
    border-radius: 10px;

    input {
      width: 100%;
      border: none;
      padding: 14px 8px 10px;
      font-size: 18px;

      border-radius: 10px 0 0 10px;
    }
    button {
      width: 48px;
      border: none;
      background: #fff;

      /* border-top-right-radius: 10px; */
      border-radius: 0 6px 6px 0;
    }
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  }
`

export const IngredientsList = styled.div`
  margin: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  div {
    animation: ${ingredientIn} 100ms ease-out forwards;
  }
`
