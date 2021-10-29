import styled, { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"

export const theme = {
  //-----------------------------------Shadows-----------------------------------//
  title900: "rgba(0, 0, 0, 0.9)",
  title700: "rgba(0, 0, 0, 0.75)",
  title500: "rgba(0, 0, 0, 0.55)",
  title300: "rgba(0, 0, 0, 0.35)",
  title50: "rgba(0, 0, 0, 0.05)",
  mainBg: "#fafafa",
  //-----------------------------------Gradients-----------------------------------//
  gradientPurple:
    "linear-gradient(0deg, rgb(236, 187, 214), rgb(186, 177, 244))",
  //-----------------------------------Shadows-----------------------------------//
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  twoxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  threexl: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
}

export const sectionWrapper = css`
  min-height: 100vh;
  padding: 5rem 0;
  @media (min-width: 726px) {
    padding: 10rem 0;
  }
`
export const firstSectionWrapper = css`
  min-height: 100vh;
`
export const titleSmall = css`
  font-size: 1.8rem;
  font-weight: 800;
`
export const titleMain = css`
  @media (min-width: 768px) {
    font-size: 5rem;
    font-weight: 900;
    line-height: 0.8;
  }
  font-size: 4rem;
  font-weight: 800;
  color: ${theme.title900};
  line-height: 0.9;
`
export const titleAlt = css`
  @media (min-width: 768px) {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
  }
  line-height: 1;
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.title700};
`

export const titlePara = css`
  @media (min-width: 768px) {
    margin-top: 0.5rem;
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1;
  }
  line-height: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.title300};
  margin-left: 0.25rem;
`
export const sectionContent = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`

export const GlobalStyle = createGlobalStyle`
${reset}
html {
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.mainBg};
  color: black;
  font-family: "Satoshi", sans-serif;
  
}
h2 {
  ${titleMain};
  margin-bottom: 5rem;
  width: fit-content;
  @media (max-width: 726px) {
    text-align:center;
    margin-bottom: 2rem;
  }
 
}
h5 {
  ${titleSmall};
}
h3{
  ${titleMain};
  color: ${({ theme }) => theme.title500};
  line-height:1 !important; 
}
h4{
  ${titleMain};
  color: ${({ theme }) => theme.title700};
  margin-bottom:1.5rem;
}
p{
  ${titlePara};
}

`
