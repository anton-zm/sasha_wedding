
import styled from 'styled-components'
import { ContentWrapper, SectionTitle } from './layouts'

export const Resto = () => {
  return (
    <Wrapper>
        <ContentWrapper>
            <SectionTitle>Локация</SectionTitle>
            <p className="intro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus qui corrupti, quis ullam quas minus, officia tempore aperiam, quo totam possimus! Optio accusamus natus maiores, voluptatum libero qui ad nesciunt!</p>
            <img src="/test1.jpg" alt="" />
        </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 margin-top: 100px;
 @media (max-width: 1023px) {
    margin-top: 60px;
 }
 & img {
    max-width: 100%;
    border-radius: 20px;
    display: block;
    margin: 40px auto;
 }

 & .intro {
    font-size: 24px;
    margin-top: 40px;
    text-align: center;
    @media (max-width: 1023px) {
        font-size: 18px;
    }
 }
`
const Date = styled.p`
text-align: center;
font-size: 26px;

@media (max-width: 1023px) {
font-size: 22px;
}
`
const Timeline = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
margin: 60px auto 0;
width: 200px;


@media (max-width: 1023px) {
    margin-top: 30px;
}
`