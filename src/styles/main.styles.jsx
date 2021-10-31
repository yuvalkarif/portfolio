import styled from "styled-components"
import {
  theme,
  titleMain,
  titleAlt,
  firstSectionWrapper,
  sectionContent,
  titlePara,
} from "./theme"

export const Wrapper = styled.section`
  ${firstSectionWrapper}
  padding:0;
  background: linear-gradient(to bottom, #aa00ff, #8c9eff);
  background: ${({ theme }) => theme.gradientPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    ${sectionContent}
    display:flex;
    flex-direction: column;
    justify-content: center;
    .gatsby-image-wrapper {
      margin-top: 2rem;
      max-width: 150px !important;
    }
    @media (min-width: 1024px) {
      align-items: center;
      flex-direction: row-reverse;
      .gatsby-image-wrapper {
        margin-top: 0;
        max-width: 250px !important;
      }
    }
    & > div:first-of-type {
      max-width: fit-content;
    }
    > * {
      flex-grow: 1;
      margin-inline: 1rem;
    }
  }
  h1 {
    ${titleMain}
    margin-left:-0.075em;
  }
  span {
    ${titleAlt}
    margin-left:-0.075em;
  }
  p {
    ${titlePara}
    max-width:33ch;
    margin-left: -0.05em;
  }
`
