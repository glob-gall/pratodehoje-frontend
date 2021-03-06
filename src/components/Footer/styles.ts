import styled, { keyframes } from 'styled-components'

const hoverSocialLinks = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)

}
`
const notHoverSocialLinks = keyframes`
from{
  transform:rotate(45deg)
}
to{
  transform:rotate(0deg)

}
`

export const Container = styled.div`
  background: #262625;
  /* min-height: 100px; */
  margin-top: 50px;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 100px 1fr;
`
export const Content = styled.div`
  grid-column: 2/3;
  color: #529333;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background: #303030;
  margin: 15px 0;
  border-radius: 7px;
  p {
    text-align: center;
  }
`
export const SocialLinks = styled.div`
  grid-column: 3/4;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fcfcfc;
    text-decoration: none;
    & + a {
      margin-left: 24px;
    }
  }
  > div {
    margin: 10px;
    svg {
      animation: ${notHoverSocialLinks} 500ms ease forwards;
      margin-right: 5px;
    }
  }
  > div:hover {
    svg {
      animation: ${hoverSocialLinks} 3s linear infinite forwards;
    }
  }
`

export const Contact = styled.div`
  grid-column: 2/4;

  background: #7a8078;
  border-radius: 10px;

  padding: 24px;
  margin-bottom: 36px;
  text-align: center;
  strong {
    margin-left: 8px;
  }
`
