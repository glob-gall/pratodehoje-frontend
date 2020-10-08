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
const onHoverButton = keyframes`
  from{
    transform:scale(1);
  }
  to{
    transform:scale(1.03);

  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 56px 0;

  form {
    background: #fff;
    border-radius: 10px;
    animation: ${pageInAnimation} 0.8s normal ease;

    padding: 24px;

    text-align: center;
    h2 {
      margin-bottom: 36px;
    }

    button {
      width: 100%;
      background: #43abf6;

      margin: 28px auto;
      border: none;
      border-radius: 10px;
      height: 56px;
      font-size: 28px;
      color: #fff;
      transition: background-color 0.2s;
      &:hover {
        animation: ${onHoverButton} 100ms ease-out forwards;
      }
    }

    a {
      align-self: center;
      font-weight: bold;
      color: #80bfed;
      transition: color 0.2s;
      &:hover {
        color: #0c78c6;
      }
    }
  }
`
