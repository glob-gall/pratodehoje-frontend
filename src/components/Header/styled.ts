import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const NavItems = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 50px;
  text-align: center;
  a {
    margin: 10px;
    padding: 5px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    border-bottom: 3px solid #e94141;
    transition: border-color 0.2s ease;
    &.active {
      border-color: #69b645;
    }
  }
`
export const ProfileNav = styled.button`
  margin-left: 24px;
  background: #f0f0f5;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  ul {
    width: 110px;
    position: absolute;
    top: 110%;
    left: -50%;
    background: #e94141;
    list-style: none;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px -0px 3px 0px rgba(0, 0, 0, 0.2);

    li {
      a {
        text-decoration: none;
        border: none;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      color: #f0f0f5;
      font-size: 18px;
      padding: 5px;
      transition: background-color 0.5s ease;
      &:hover {
        background: #db3a3a;
      }
      & + li {
        border-top: 2px solid #30303040;
      }
    }
  }

  @media (max-width: 836px) {
    margin-left: 0;
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
