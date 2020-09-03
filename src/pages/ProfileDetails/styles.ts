import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

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

export const ProfileContainer = styled.div`
  animation: ${pageInAnimation} 0.8s normal ease;
  background: #fff;
  border-radius: 10px;
  width: 70%;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
export const TitleContainer = styled.div`
  height: 200px;
  display: flex;
  img {
    width: 200px;
    height: 200px;
    display: block;
    border-radius: 10px;
  }
  div {
    flex-direction: column;
    h2 {
      margin-left: 24px;
      height: 50px;
      color: #535353;
      font-size: 42px;
      font-weight: normal;
    }
    textarea {
      resize: none;
      margin-left: 24px;
      height: 150px;
      width: 100%;
      border: none;
      border-radius: 8px;
      background: #f5f5f5;
      padding: 16px;
      font-size: 18px;
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
    }
  }
`
export const RecipesContainer = styled.div`
  background: #f5f5f5;
  padding: 5px;
  border-radius: 10px;
  margin-top: 36px;
  width: 100%;
  min-height: 200px;

  display: flex;
  flex-wrap: wrap;
`
export const Recipe = styled(Link)`
  border-radius: 5px;
  background: #515151;
  margin: 22px 11px;
  width: 200px;
  height: 200px;
  text-align: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(80%);
  }
  h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-overflow: ellipsis;
    color: #fff;
    font-size: 24px;
  }
`
