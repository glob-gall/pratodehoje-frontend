import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const Container = styled.div`
  margin: 100px 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardProfile = styled.div`
  background: #fff;
  margin: 20px;
  width: 220px;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: space-between;
    span {
      margin-right: 10px;
    }
    div {
      flex-direction: column;
      h3 {
        margin-left: 10px;
        font-size: 21px;
      }
      strong {
        color: #6c6c80;
        margin: 15px 0 5px 10px;
        font-size: 14px;
      }
    }
  }
`
