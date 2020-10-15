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

export const Container = styled.div`
  position: relative;
`

export const ProfileContainer = styled.div`
  animation: ${pageInAnimation} 0.8s normal ease;
  background: #fff;
  border-radius: 10px;
  width: 70%;
  margin: 80px auto 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;

  .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    /* width: 100%; */
    margin-left: 24px;
    h2 {
      height: 50px;
      color: #535353;
      font-size: 42px;
      font-weight: normal;
    }
    textarea {
      resize: none;
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

export const ImageUpload = styled.div`
  width: 200px;
  height: 200px;

  position: relative;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 200px;
    height: 200px;
    object-fit: center;
  }
  label {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #00000050;
    padding: 8px;
    border-radius: 10px;

    opacity: 0;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
  div {
    position: absolute;
    top: 0;
    background: #ddd5;
  }
  input {
    display: none;
  }
`
export const LogOutButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  padding: 8px;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0px -0px 3px 0px rgba(0, 0, 0, 0.4);
  border: none;

  font-size: 22px;
  color: #e94141;

  svg {
    margin-left: 6px;
  }
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: #e94141;
  }
`
