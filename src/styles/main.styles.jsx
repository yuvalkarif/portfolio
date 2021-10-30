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
    justify-content: space-evenly;
    @media (min-width: 1024px) {
      align-items: center;
      flex-direction: row-reverse;
      .gatsby-image-wrapper {
        margin-top: 0;
      }
    }
    & > div:first-of-type {
      max-width: fit-content;
    }
    > * {
      flex-grow: 1;
    }
    .gatsby-image-wrapper {
      margin-top: 2rem;
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
