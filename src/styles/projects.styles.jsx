import styled, { css } from "styled-components"
import { sectionWrapper, sectionContent } from "./theme"
import { motion } from "framer-motion"

export const Wrapper = styled.section`
  ${sectionWrapper}
  margin-bottom:2rem;
  p {
    color: ${({ theme }) => theme.title500};
  }
  & > div {
    ${sectionContent}
    & > div {
      display: flex;
      /* justify-content: space-between; */
      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    }
  }
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    grid-column: 2;
  }
`
export const Title = styled(motion.h3)`
  color: ${({ theme, selected }) =>
    selected ? theme.title900 : theme.title300};
  font-size: ${({ selected }) => (selected ? "2rem" : "2rem")};
  @media (max-width: 726px) {
    font-size: ${({ selected }) => (selected ? "1.75rem" : "1.25rem")};
  }
  cursor: pointer;
  transition: color 250ms ease;
  margin-bottom: 0.1em;
  :hover {
    color: ${({ theme, selected }) =>
      selected ? theme.title900 : theme.title500};
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 0.25fr 1fr 0.5fr;
  grid-gap: 2rem;
  .preview {
    grid-row: 2 / 2;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 0.5fr 0.75fr;
    .preview {
      grid-row: 1 / span 2;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.xl};
    img {
      margin: 0 auto;
    }
  }
`
export const Description = styled.div`
  @media (min-width: 1024px) {
    grid-row: 2;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.blockBg};
  padding: 2rem;
`
export const Buttons = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
  margin-top: 1rem;
  justify-content: center;
`
export const btn = css`
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.sm};
  box-sizing: content-box;
`
export const Button = styled.button`
  ${btn}
  background:#6138ff;
  color: ${({ theme }) => theme.mainBg};
  &:hover {
    filter: brightness(95%);
  }
`
// background: linear-gradient(-45deg, #aa00ff, #8c9eff);
export const AltButton = styled.button`
  ${btn}
  background: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.title900};
  &:hover {
    filter: brightness(95%);
  }
`
