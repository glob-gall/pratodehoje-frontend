import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface NavItemsProps {
  active: boolean
  activeLink: 'dashboard' | 'createRecipe' | 'profiles'
}

export const Container = styled.div`
  background: #e94141;
  align-items: center;
  display: flex;
  @media (max-width: 836px) {
    align-items: center;
    justify-content: center;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: 836px) {
    flex-direction: column;
    width: auto;
  }
`

export const Logo = styled(Link)`
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
    padding: 5px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    border-bottom: 3px solid #e94141;
    transition: color 1s ease;
    &.dashboard {
      ${props =>
        props.activeLink === 'dashboard' &&
        css`
          border-color: #69b645;
        `}
    }
    &.createRecipe {
      ${props =>
        props.activeLink === 'createRecipe' &&
        css`
          border-bottom: 3px solid #69b645;
        `}
    }
    &.profiles {
      ${props =>
        props.activeLink === 'profiles' &&
        css`
          border-color: #69b645;
        `}
    }
  }
  @media (max-width: 836px) {
    ${props =>
      props.active
        ? css`
            /* display: flex; */
          `
        : css`
            height: 0px;
            overflow: hidden;
          `}
    flex-direction:column;
  }
`

export const Burguer = styled.button`
  display: none;
  background: transparent;
  border: 1px solid #e94141;
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
  @media (max-width: 836px) {
    display: initial;
    margin-left: auto;
    position: absolute;
    right: 0px;
    top: 20px;
  }
`
