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
  }
  h1 {
    ${titleMain}
    margin-left:-0.25rem;
  }
  span {
    ${titleAlt}
  }
  p {
    ${titlePara}
  }
`
