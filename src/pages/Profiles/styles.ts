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
const hoverProfile = keyframes`
  from{
    transform:scale(1);
  }
  to{
    transform:scale(1.05);

  }
`
const notHoverProfile = keyframes`
  from{
    transform:scale(1.05);
  }
  to{
    transform:scale(1);

  }
`

export const Container = styled.div`
  animation: ${pageInAnimation} 0.8s normal ease;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`
export const CardContainer = styled.div`
  margin-top: 50px;
  grid-column: 2/3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardProfile = styled(Link)`
  animation: ${notHoverProfile} 0.5s ease;
  text-decoration: none;
  background: #fff;
  margin: 20px;
  width: 220px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    animation: ${hoverProfile} 0.5s normal ease forwards;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  div {
    div {
      display: block;
      h3 {
        color: #535353;
        margin-left: 10px;
        font-size: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        color: #6c6c80;
        margin: 8px 0 5px 10px;
        font-size: 18px;
      }
    }
  }
`
