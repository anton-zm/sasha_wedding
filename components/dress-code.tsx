
import styled from 'styled-components'
import { ContentWrapper, SectionTitle } from './layouts'

export const DressCode = () => {
    const colors = [
        '#292f45',
        '#a9a9c2',
        '#e7c4c6',
        '#d3c9bb'
    ]
  return (
    <Wrapper>
        <ContentWrapper>
            <SectionTitle>Дресс-код</SectionTitle>
            <p className="intro">Нам будет приятно, если вы поддержите цветовую гамму нашего праздника</p>
            <Colors>
                {colors.map((e,i) => (
                    <div style={{backgroundColor: e}} key={i} className="dress-color" />
                ))}
            </Colors>
        </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 margin: 100px 0;
 @media (max-width: 1023px) {
    margin-top: 60px;
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
const Colors = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
align-items: center;
width: 60%;
margin: 40px auto 0;

@media (max-width: 1023px) {
width: 80%;
}

& .dress-color {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    flex-shrink: 0;

    @media (max-width: 1023px) {
        width: 50px;
        height: 50px;
    }
}
`
