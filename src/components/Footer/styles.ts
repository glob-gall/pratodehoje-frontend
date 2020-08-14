import styled from 'styled-components'

export const Container = styled.div`
  background: #1b1b1a;
  min-height: 100px;
  margin-top: 50px;

  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
`
export const Content = styled.div`
  grid-column: 2/3;
  color: #529333;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background: #262625;
  margin: 15px;
  border-radius: 7px;
  p {
    text-align: center;
  }
`
export const SocialLinks = styled.div`
  grid-column: 3/4;
  color: #fcfcfc;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;

    margin: 10px;

    svg {
      margin-right: 5px;
    }
  }
`
