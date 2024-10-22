
import styled from 'styled-components'
import { ContentWrapper } from './layouts'

export const Poster = () => {
  return (
    <Wrapper>
        <img src="/poster.webp" alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    & img {
        max-width: 500px;
        max-height: 70vh;
    }
`