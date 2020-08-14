import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const RecipeContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 70%;
  margin: 25px auto;
  overflow: hidden;
  height: 533px;
`
export const TitleContainer = styled.div`
  height: 150px;
  overflow: hidden;
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(80%);
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: #fff;
    font-size: 32px;
  }
`
export const DetailsContainer = styled.div`
  margin: 15px;
  display: flex;
`

export const MethodContainer = styled.div`
  width: 65%;
  strong {
    margin: 10px;
  }
  ul {
    height: 322px;
    margin-top: 10px;
    background: #e8e8e8;
    list-style: none;
    border-radius: 10px;
    padding: 10px;
    li {
      margin: 10px;
      /* font-weight: bold; */
      font-size: 19px;
    }
  }
`

export const IngredientsContainer = styled.div`
  border-radius: 10px;

  background: #e8e8e8;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  width: 30%;
  height: 350px;
  list-style-type: none;
  align-items: center;
  padding: 10px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #e8e8e8;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #6c6c80;
    border-radius: 5px;
  }
  strong {
    width: 100%;
    text-align: center;
    margin: 15px 0;
  }

  li {
    color: #fff;
    background: #41c900;
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  }
`
