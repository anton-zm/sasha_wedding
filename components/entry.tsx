
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
        <div className="curtain" />
        <div className="curtain_b" />
    </Wrapper>
  )
}
const Text = styled.p`
    font-size: 32px;
    color: #222;
    margin-top: 40px;
    max-width: 500px;
    text-align: center;
`
const Members = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    & p {
        font-size: 80px;
        color: #222;
    }
    & span {
        display: block;
        font-size: 60px;
        color: #222;
    }
`
const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & .number {
        color: #222;
        font-size: 100px;
    }
    & .divider {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #222;
    }
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    
`
const Wrapper = styled.section`
    height: 100vh;
    position: relative;

    & .curtain_b {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 280px;
        background: linear-gradient(
            to bottom,
            rgba(250, 250, 250, 0),
            #808080
        );
    }
    & .curtain {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 280px;
        background: linear-gradient(
            to bottom,
            #808080,
            rgba(250, 250, 250, 0)
        );
    }
`