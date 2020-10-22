import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const NotFoundContainer = styled.div`
  margin: 54px 0;
  background: #e94141;
  padding: 24px 42px;

  border-radius: 10px;
  text-transform: uppercase;

  h1 {
    color: #fff;
    font-size: 48px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  h2 {
    margin-top: 28px;
    color: #a81e1e;
    font-size: 182px;
    line-height: 160px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);
`
