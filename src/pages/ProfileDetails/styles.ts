import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const ProfileContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 70%;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleContainer = styled.div`
  height: 200px;
  display: flex;
  margin: 24px;
  img {
    width: 200px;
    height: 200px;
    display: block;
    border-radius: 10px;
  }
  div {
    margin-left: 24px;
    flex-direction: column;
    h2 {
      margin-left: 24px;
      height: 50px;
      color: #535353;
      font-size: 42px;
      font-weight: normal;
    }
    p {
      height: 150px;
      border-radius: 10px;
      background: #f5f5f5;
      padding: 16px;
      font-size: 18px;
      overflow: scroll;
    }
  }
`
export const RecipesContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 36px;
  width: 80%;
  h3 {
    margin-bottom: 8px;
    font-size: 25px;
    margin-left: 100px;
  }
`
