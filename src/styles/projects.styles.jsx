import styled, { css } from "styled-components"
import { sectionWrapper, sectionContent } from "./theme"
import { motion } from "framer-motion"

export const Wrapper = styled.section`
  ${sectionWrapper}

  p {
    color: ${({ theme }) => theme.title500};
  }
  & > div {
    ${sectionContent}
    & > div {
      display: flex;
      /* justify-content: space-between; */
      @media (max-width: 726px) {
        flex-direction: column-reverse;
      }
    }
  }
`

export const Titles = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 726px) {
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
  transition: color 150ms ease;
  margin-bottom: 0.1em;
  :hover {
    color: ${({ theme, selected }) =>
      selected ? theme.title900 : theme.title500};
  }
`
export const Content = styled.div`
  border-radius: 1rem;
  background-color: #f5f5f5;
  box-shadow: ${({ theme }) => theme.sm};
  padding: 1.5rem;
  display: grid;
  /* & > * {
    width: 100%;
  } */
  grid-template-columns: 1;
  grid-template-rows: 0.25fr 1fr 0.5fr;
  grid-gap: 1rem;
  .gatsby-image-wrapper {
    grid-row: 2 / 2;
  }
  @media (min-width: 726px) {
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 0.5fr 0.75fr;
    .gatsby-image-wrapper {
      grid-row: 1 / span 2;
    }
  }

  img {
    background-size: contain;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.sm};
  }
`
export const Description = styled.div`
  @media (min-width: 726px) {
    grid-row: 2;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`
const btn = css`
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.DEFAULT};
  box-sizing: content-box;
`
export const Button = styled.button`
  ${btn}
  background: ${({ theme }) => theme.title900};
  color: ${({ theme }) => theme.mainBg};
  &:hover {
    background-color: ${({ theme }) => theme.title700};
  }
`
export const AltButton = styled.button`
  ${btn}
  background: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.title900};
  &:hover {
    background-color: ${({ theme }) => theme.title50};
    color: ${({ theme }) => theme.title700};
  }
`
