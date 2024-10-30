
import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { guests_list } from "@/guests";

export default function Home() {
  const [password, setPassword] = useState('')
  const [state, setState] = useState(false)

  useEffect(() => {
    if(password === '250125'){
      setState(true)
    }
  },[password])

  return (
    <>
      <Head>
        <title>Саша & Алина</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main>
          {state ? (
          <List>
            {guests_list.map(e => (
              <p key={e.id}>{e.inner_name} - {`https://wedding-sasha-alina.netlify.app/${e.slug}`}</p>
            ))}
          </List>) : <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Пароль"/>}
        </Main>
      </div>
    </>
  );
}

const List = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 70vw;
font-size: 22px;
font-family: Arial, Helvetica, sans-serif;
padding: 60px;
text-align: center;
`

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;

& input {
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 300px;
}

& .curtain_b {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(
            to bottom,
            rgba(250, 250, 250, 0),
            #808080
        );
    }
    & .curtain {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(
            to bottom,
            #808080,
            rgba(250, 250, 250, 0)
        );
    }

    :is(.curtain, .curtain_b) {
      @media (max-width: 1023px) {
      height: 60px;
      }
    }
`