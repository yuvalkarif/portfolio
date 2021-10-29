import styled from "styled-components"
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
      justify-content: space-between;
      @media (max-width: 726px) {
        flex-direction: column-reverse;
      }
    }
  }
`

export const Titles = styled.div`
  min-width: 30%;
  margin-left: 2rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
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

  .preview {
    max-width: 805px;
    display: block;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.sm};
  }
`
export const Description = styled.div`
  padding-top: 2rem;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
export const Button = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  background: #449aff;
  box-shadow: ${({ theme }) => theme.DEFAULT};
  color: ${({ theme }) => theme.mainBg};
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
`
export const AltButton = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  background: #6e44ff;
  box-shadow: ${({ theme }) => theme.DEFAULT};
  color: ${({ theme }) => theme.mainBg};
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
`
