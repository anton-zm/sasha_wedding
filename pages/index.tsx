
import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { guests_list } from "@/guests";
import { YourDecision } from "@/components/decision";
import { DressCode } from "@/components/dress-code";
import { Entry } from "@/components/entry";
import { HowGet } from "@/components/how-get";
import { Poster } from "@/components/poster";
import { Programm } from "@/components/programm";
import { Resto } from "@/components/resto";

export default function Home() {

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
        <>
            <Entry />
            <Poster />
            <Programm />
            <Resto />
            <HowGet />
            <DressCode />
            </>
          <div className="curtain" />
          <div className="curtain_b" />
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

& a {
  color: #c77474;
  text-decoration: underline;
}
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