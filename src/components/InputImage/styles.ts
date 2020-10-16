import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 100%;
    text-align: center;

    padding: 12px;
    border-radius: 10px;
    cursor: pointer;

    background: #80bfed;
    color: #fff;

    margin-bottom: 12px;
    transition: background-color 0.2s ease;
    :hover {
      background: #43abf6;
    }
  }
  input {
    display: none;
  }
`

export const PreviewImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;

  border: 3px solid #89b0cd;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`
