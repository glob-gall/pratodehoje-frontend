import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-flow: 90px 1fr 100px;
  margin: 0 50px;
`

export const EquipamentsList = styled.div`
  margin-top: 150px;
  div {
    align-items: center;
    margin-top: 10px;
    flex-direction: row;
    label {
      padding-left: 10px;
    }
    input {
      cursor: pointer;
      margin-right: 10px;
    }
  }
`

export const ContainerFeed = styled.div`
  margin-top: 50px;
  > h3 {
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 25px;
  }
`
export const Search = styled.div`
  text-align: center;
  div {
    margin-top: 35px;
    width: 100%;
    display: flex;
    border-radius: 7px;
    overflow: hidden;
    height: 45px;
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
  }
`

export const IngredientsList = styled.div`
  margin: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
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

export const RecipeList = styled.div`
  min-height: 300px;
  background: #fff;
  padding: 25px;
  border-radius: 7px;
  h3 {
    margin-top: 15px;
  }
`
export const Recipe = styled.div`
  background: #f0f0f5;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 180px;
  overflow: hidden;
  & + div {
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
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    height: 100px;
    list-style-type: none;

    li {
      color: #fff;
      background: #41c900;
      margin: 10px;
      padding: 10px;
      height: 38px;
      font-weight: bold;
      border-radius: 5px;
    }
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
