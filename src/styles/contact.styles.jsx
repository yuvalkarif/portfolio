import styled from "styled-components"
import { firstSectionWrapper, sectionContent } from "./theme"
import { btn } from "./projects.styles"
export const Wrapper = styled.section`
  ${firstSectionWrapper}
  min-height: unset;
  padding-block: 6rem;

  h2 {
    margin-bottom: 0rem;
    text-align: start;
    @media (max-width: 726px) {
      text-align: center;
      margin: 0 auto;
    }
  }
  h3 {
    line-height: 1.2;
    @media (max-width: 726px) {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }

  & > div {
    ${sectionContent}
  }
  strong {
    background: linear-gradient(-45deg, #aa00ff, #8c9eff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding: 0.5rem;
    position: relative;
  }
  span {
    font-weight: 700;
    font-size: 1.1rem;
    color: #aa00ff;
    &:hover {
      filter: brightness(90%);
      cursor: pointer;
    }
  }
`

export const MailButton = styled.button`
  ${btn}
  background-color:#6138ff;
  color: ${({ theme }) => theme.mainBg};
  font-size: 1.1rem;
  border-radius: 2rem;
  :hover {
    filter: brightness(125%);
  }
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  & > * {
    margin: 1rem 1rem;
  }
`
