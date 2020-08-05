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
