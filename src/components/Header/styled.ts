import styled from 'styled-components'

export const Container = styled.div`
  background: #ed3939;
  padding: 0 65px;
  display: flex;

  align-items: center;
`
export const Logo = styled.div`
  margin: 15px;
  img {
    width: 240px;
  }
  @media (max-width: 768px) {
    display: block;
    height: 100vh;
    /* position: absolute; */
  }
`

export const Nav = styled.div`
  margin-left: auto;
  display: block;
  a {
    margin: 25px;

    text-decoration: none;
    color: #fff;
    font-size: 18px;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 85%;
      height: 3px;
      background: #39b100;

      left: 50%;
      transform: translateX(-50%);
      top: 115%;

      visibility: hidden;
      opacity: 0;
      transform: opacity 0.6s;
    }

    &:hover {
      color: #d4d4d4;
      &::after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`
export const Burguer = styled.div`
  display: none;
  &:hover {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
  }

  div {
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background: #fff;
    margin: 10px;
  }
  @media (max-width: 768px) {
    display: initial;
    margin-left: auto;
  }
`
