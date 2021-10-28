import styled from "styled-components"
import { sectionWrapper, sectionContent } from "./theme"

export const Wrapper = styled.section`
  .icon {
    max-width: 2rem;
    max-height: 2rem;
    margin-right: 0.5rem;
  }
  ${sectionWrapper}
  min-height:unset;

  & > div {
    ${sectionContent}
    & > div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      ul {
        position: relative;
        margin: 1rem;
        background-color: #fefefefe;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        width: 100%;
        box-shadow: ${({ theme }) => theme.sm};
        div {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;

          & > * {
            flex: 1 1 0;
          }
        }
      }
      h5 {
        padding: 0 1rem;
        text-align: center;
        margin-bottom: 0.5rem;
      }
      li {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        font-size: 1.2rem;
        padding-block: 0.25rem;
        padding-inline: 0 1rem;
      }
    }
  }
`
