import styled, { keyframes } from 'styled-components'

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
export const RecipeContainer = styled.div`
  animation: ${pageInAnimation} 0.8s normal ease;
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

  ul {
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
export const MethodTtitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px 0 10px 15px;
  strong {
    font-size: 18px;
  }
  p {
    display: flex;
    align-items: center;

    margin-left: 16px;
    background: #e8e8e8;
    color: #6c6c80;
    padding: 12px;
    border-radius: 10px;

    svg {
      margin-right: 8px;
    }
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
    margin: 16px 18px 8px;
    font-size: 18px;
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
export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 15px;
    border: none;
    border-radius: 10px;

    padding: 15px;
    font-size: 18px;
    font-weight: bold;

    background: #69b645;
    color: #fff;
    text-decoration: none;
  }
`
