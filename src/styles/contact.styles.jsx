import styled from "styled-components"
import { firstSectionWrapper, sectionContent } from "./theme"
import Arrow from "../assets/arrow.svg"
import { btn } from "./projects.styles"
export const Wrapper = styled.section`
  ${firstSectionWrapper}
  min-height: unset;
  padding-block: 6rem;

  h2 {
    margin-bottom: 0rem;
    text-align: start;
  }
  h3 {
    line-height: 1.2;
  }

  & > div {
    ${sectionContent}
  }
  strong {
    background: linear-gradient(-45deg, #aa00ff, #8c9eff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
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

export const ArrowIcon = styled(Arrow)`
  max-width: 125px;
  * {
    fill: #aa00ff !important;
  }
  position: absolute;
  left: 25%;
  transform: rotate3d(0, 0, 1, 90deg);
  bottom: -7.5rem;
  /* transform-origin: 50% 50%; */
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
