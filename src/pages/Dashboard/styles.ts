import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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
    border-radius: 5px;
    overflow: hidden;
    height: 45px;
    input {
      width: 90%;
      padding: 20px 20px 10px 10px;

      font-size: 16px;

      border: none;
    }
    button {
      width: 10%;
      height: 45px;
      border: none;
      /* border-left: 1px solid #303030; */
      border-radius: 0;
      background: #94ff92;
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
  h3 {
    margin-top: 25px;
  }

  background: #fff;
  padding: 25px;
  border-radius: 10px;
  div {
    & + div {
      margin-top: 20px;
    }
    img {
      width: 300px;
      height: 230px;
    }

    background: #f0f0f5;
    border-radius: 10px;
    overflow: hidden;
    display: flex;

    div {
      margin-left: 35px;
      flex-direction: column;

      h3 {
        font-size: 32px;
        margin-left: 45px;
      }
      p {
        font-size: 21px;
        margin-top: 10px;
        margin-left: 45px;
        font-weight: bold;
        color: #6c6c80;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        list-style-type: none;
        margin: 7px 10px 10px 25px;
        li {
          color: #6c6c80;
          background: #c4c4c4;
          margin: 10px;
          padding: 10px;
          font-weight: bold;
          border-radius: 5px;
        }
      }
    }
  }
`
