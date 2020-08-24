import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const RecipeList = styled.div`
  min-height: 300px;
  background: #fff;
  padding: 25px;
  border-radius: 7px;
  h3 {
    margin-top: 15px;
  }
`
const recipeOnHover = keyframes`
  from{
    /* transition: transform 300ms ease-in-out; */
    transform:scale(1)
  }
  to{
    transform:scale(1.03)
  }
`

export const Recipe = styled(Link)`
  &:hover {
    animation: ${recipeOnHover} 100ms ease-out forwards;
    /* transform: translate(5px); */
  }
  text-decoration: none;
  background: #f0f0f5;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 180px;
  overflow: hidden;
  & + a {
    margin-top: 20px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    h3 {
      color: #535353;
      font-size: 32px;
      margin-left: 45px;
      height: 50px;
      overflow: hidden;
    }
  }
`
export const IngredientsContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    overflow: hidden;
  }
  &::-webkit-scrollbar-track {
    background: #c4c4c4;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #6c6c80;
    border-radius: 5px;
  }
  margin: 7px 10px 10px 25px;

  p {
    font-size: 21px;
    font-weight: bold;
    color: #6c6c80;
    margin-left: 20px;
    display: inline;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    height: 100px;
  }
`

export const RecipesNotFound = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  margin: 100px;
  padding: 15px;
  border: 10px;
  border-radius: 10px;

  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 15px;
  }
`

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  div {
    display: flex;
    align-items: center;
    button {
      width: 50px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        margin: auto;
      }
      background: #89b0cd;
      align-items: center;
      color: #fff;
      font-weight: bold;
      border-radius: 10px;
      border: none;
      font-size: 16px;
      transition: background-color 0.2s;
      &:hover {
        animation: ${recipeOnHover} 200ms ease-out forwards;
        background: #7ca2bd;
        color: #fff;
      }
      & + button {
        margin-left: 15px;
      }
    }
  }
  > span {
    padding: 0 5px;
    text-align: center;
    font-weight: bold;
    color: #7a8078;
    font-size: 18px;
    border-bottom: 3px solid #ffd700;
  }
`
