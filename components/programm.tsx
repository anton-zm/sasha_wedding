
import styled from 'styled-components'
import { ContentWrapper, SectionTitle } from './layouts'

export const Programm = () => {
  return (
    <Wrapper>
        <ContentWrapper>
            <SectionTitle>Программа дня</SectionTitle>
            <Timeline>
            <Date>Суббота, 25 января 2025</Date>
                <ProgrammSlot>
                    <SlotHeading>
                        <img src="/shit1.jpg" alt="" />
                        <div className="flex-col between">
                            <p>14:30</p>
                            <p>Cбор гостей</p>
                        </div>
                    </SlotHeading>
                    <SlotContent>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum iste </p>
                    </SlotContent>
                </ProgrammSlot>
                <ProgrammSlot>
                    <SlotHeading>
                        <img src="/shit1.jpg" alt="" />
                        <div className="flex-col between">
                            <p>15:00</p>
                            <p>Банкет</p>
                        </div>
                    </SlotHeading>
                    <SlotContent>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum iste </p>
                    </SlotContent>
                </ProgrammSlot>
                <ProgrammSlot>
                    <SlotHeading>
                        <img src="/shit1.jpg" alt="" />
                        <div className="flex-col between">
                            <p>23:00</p>
                            <p>Завершение торжества</p>
                        </div>
                    </SlotHeading>
                    <SlotContent>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum iste </p>
                    </SlotContent>
                </ProgrammSlot>
            </Timeline>
        </ContentWrapper>
    </Wrapper>
  )
}
const SlotContent = styled.div`
    border-left: 3px solid #222;
    margin-left: 25px;

    & p {
        padding-left: 45px;
        font-size: 18px;
    }
`
const ProgrammSlot = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`
const SlotHeading = styled.div`
    display: flex;
    gap: 20px;

    & p {
        font-size: 22px;
        white-space: nowrap;
    }

    & img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`
const Wrapper = styled.section`
 
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