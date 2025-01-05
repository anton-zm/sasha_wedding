import { Entry } from "@/components/entry";
import { Resto } from "@/components/resto";
import { Poster } from "@/components/poster";
import { Programm } from "@/components/programm";
import Head from "next/head";
import styled from "styled-components";
import { HowGet } from "@/components/how-get";
import { DressCode } from "@/components/dress-code";
import { YourDecision } from "@/components/decision";
import { useRouter } from "next/router";
import { guests_list } from "@/guests";
import { useEffect, useState } from "react";

export default function Visit() {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    },[])

  return (
    <>
    </>
  );
}

const Main = styled.main`
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
