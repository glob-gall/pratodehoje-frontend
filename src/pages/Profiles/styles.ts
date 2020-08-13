import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`
export const CardContainer = styled.div`
  margin-top: 50px;
  grid-column: 2/3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardProfile = styled.div`
  background: #fff;
  margin: 20px;
  width: 220px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    justify-content: center;
  }
  div {
    display: flex;
    height: 60px;
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
