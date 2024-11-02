
import styled from 'styled-components'
import { ContentWrapper, SectionTitle } from './layouts'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const HowGet = () => {
    const point = [48.723970, 44.503118]
  return (
    <Wrapper>
        <ContentWrapper>
            <SectionTitle>Как добраться</SectionTitle>
            <MapWrapper>
            <YMaps>
                    <Map
                        height={300}
                        width={'100%'}
                        defaultState={{ center: point, zoom: 17 }}
                    >
                        <Placemark geometry={point} />
                    </Map>
                </YMaps>
            </MapWrapper>
        </ContentWrapper>
    </Wrapper>
  )
}
const MapWrapper = styled.div`
margin-top: 60px;
border-radius: 20px;
overflow: hidden;
`
const Wrapper = styled.section`
 margin-top: 100px;
 @media (max-width: 1023px) {
    margin-top: 60px;
    margin-bottom: 60px;
 }
 & img {
    max-width: 100%;
    border-radius: 20px;
    margin-top: 40px;
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