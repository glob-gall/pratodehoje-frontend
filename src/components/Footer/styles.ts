import styled from 'styled-components'

export const Container = styled.div`
  background: #1b1b1a;
  min-height: 100px;
  margin-top: 50px;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
`
export const Content = styled.p`
  grid-column: 2/3;
  color: #01b801;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #262625;
  margin: 15px;
  border-radius: 7px;
`
export const SocialLinks = styled.div`
  grid-column: 3/4;
  color: #fcfcfc;

  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    & + div {
      margin-left: 10px;
    }
    svg {
      margin-right: 5px;
    }
  }
`
