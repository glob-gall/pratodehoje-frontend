import styled, { keyframes } from 'styled-components'

const spinning = keyframes`
from{
  transform: rotate(0deg);
}to{
  transform: rotate(359deg);
}

`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;

    animation: ${spinning} 0.8s infinite linear;
  }
`
