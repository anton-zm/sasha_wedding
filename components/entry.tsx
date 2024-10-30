
import styled from 'styled-components'
import { ContentWrapper } from './layouts'

export const Entry = () => {
  return (
    <Wrapper>
        <Content >
                <div>
                <Date>
                    <p className="number">25</p>
                    <div className="divider" />
                    <p className="number">01</p>
                    <div className="divider" />
                    <p className="number">25</p>
                </Date>
                <Members>
                    <p>Александр</p>
                    <span>и</span>
                    <p>Алина</p>
                </Members>
                <Text>Мы будем рады разделить с Вами этот важный для нас день!</Text>
                </div>
            </Content>
        
    </Wrapper>
  )
}
const Text = styled.p`
    font-size: 32px;
    color: #222;
    margin-top: 40px;
    max-width: 500px;
    text-align: center;

    @media (max-width: 1023px) {
    font-size: 26px;
    margin-top: 20px;
    }
`
const Members = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    & p {
        font-size: 72px;
        line-height: 1;
        color: #222;

        @media (max-width: 1023px) {
        font-size: 66px;
        }
    }
    & span {
        display: block;
        font-size: 30px;
        color: #222;
    }
`
const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .number {
        color: #222;
        font-size: 82px;

        @media (max-width: 1023px) {
            font-size: 62px;
        }
    }
    & .divider {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #222;

        @media (max-width: 1023px) {
            width: 5px;
            height: 5px;
        }
    }
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
const Wrapper = styled.section`
    min-height: 100vh;
    position: relative;
`