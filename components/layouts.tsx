import styled from "styled-components";

export const ContentWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;

  @media (max-width: 1360px) {
    padding: 0 40px;
  }
  @media (max-width: 1023px) {
    padding: 0 20px;
  }
`;

export const SectionTitle = styled.p`
  font-size: 72px;
  text-align: center;
  font-family: "Alumni Sans Pinstripe", sans-serif;

  @media (max-width: 1023px) {
  font-size: 44px;
  }
`