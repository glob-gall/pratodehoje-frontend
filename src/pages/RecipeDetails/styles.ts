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
`
export const TitleContainer = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  @media (max-width: 836px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MethodContainer = styled.div`
  width: 65%;
  strong {
    margin: 15px;
    font-size: 18px;
  }
  ul {
    margin-top: 10px;
    background: #e8e8e8;
    list-style: none;
    border-radius: 10px;
    padding: 10px;
    li {
      margin: 10px;
      font-size: 19px;
    }
  }
  @media (max-width: 836px) {
    width: 90%;
  }
`

export const IngredientsContainer = styled.div`
  border-radius: 10px;
  background: #e8e8e8;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-bottom: auto;
  min-height: 250px;
  width: 30%;
  list-style-type: none;
  align-items: center;
  padding: 10px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #e8e8e8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #6c6c80;
    border-radius: 10px;
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
  }
  @media (max-width: 836px) {
    width: 90%;
    margin: 15px auto 15px;
    /* display: block; */
    li {
      text-align: center;
    }
  }
`
