import styled from 'styled-components'

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
  grid-column: 2/3;
  margin-top: 50px;
  > h3 {
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 25px;
  }
  @media (max-width: 836px) {
    grid-column: 1/4;
  }
`
export const Search = styled.div`
  text-align: center;

  div {
    margin-top: 35px;
    width: 100%;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    height: 45px;
    /* box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2); */
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
