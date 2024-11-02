
import styled from 'styled-components'
import { ContentWrapper } from './layouts'

export const Poster = () => {
  return (
    <Wrapper>
        <ContentWrapper>
          <img src="/poster1.jpg" alt="" />
        </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: cover;
        border-radius: 30px;
    }
`