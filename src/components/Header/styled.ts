import styled, { css } from 'styled-components'

interface NavItemsProps {
  active: boolean
}

export const Container = styled.div`
  background: #ed3939;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`

export const Logo = styled.div`
  margin: 15px;
  img {
    width: 240px;
  }
`

export const NavItems = styled.div<NavItemsProps>`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 50px;
  a {
    margin: 10px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    ${props =>
      props.active
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
    flex-direction:column;
  }
`

export const Burguer = styled.button`
  display: none;
  background: transparent;
  border: 1px solid #ed3939;
  margin-right: 50px;
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
    position: absolute;
    right: 0px;
    top: 20px;
  }
`
