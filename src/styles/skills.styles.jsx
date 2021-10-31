import styled from "styled-components"
import { sectionWrapper, sectionContent } from "./theme"

export const Wrapper = styled.section`
  .icon {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 0.5rem;
  }
  ${sectionWrapper}
  min-height:unset;

  & > div {
    ${sectionContent}
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

      ul {
        position: relative;
        margin: 1rem;
        background-color: ${({ theme }) => theme.blockBg};
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        width: 100%;
        box-shadow: ${({ theme }) => theme.sm};

        div {
          display: flex;
          font-size: inherit;
          max-height: 25ch;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      }
      h5 {
        padding: 0 1rem;
        text-align: center;
        margin-bottom: 1rem;
      }
      li {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        font-size: 1.2rem;
        padding: 0.5rem 0.25rem;
      }
    }
  }
`
