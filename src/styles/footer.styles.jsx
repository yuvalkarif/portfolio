import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: black;
  padding: 4rem;
  color: white;
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 726px) {
    div {
      flex-direction: column;
      width: fit-content;
      margin: 0 auto;
    }
  }
  a {
    &:hover {
      filter: brightness(70%);
    }
  }
  span {
    font-weight: 700;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: fit-content;
  }
  .footer-icon {
    color: white;
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin-right: 0.25rem;
  }
`
