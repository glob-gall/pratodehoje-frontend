import styled, { keyframes } from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
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
`

export const IngredientsList = styled.div`
  margin: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  div {
    animation: ${ingredientIn} 100ms ease-out forwards;
  }
`
