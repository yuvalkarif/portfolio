import styled from "styled-components"

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;

  strong {
    color: ${({ theme }) => theme.title900};
    font-weight: 800;
    padding: 0.5rem;
    margin: 0 0.5rem;
    text-align: center;
    line-height: 1.6;
    font-size: 1rem;
  }
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.title500};
    font-weight: 700;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    line-height: 1.6;
    font-size: 1rem;

    @media (max-width: 726px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    &:hover {
      background-color: ${({ theme }) => theme.title50};
      color: ${({ theme }) => theme.title700};
    }
  }
`
export const Navbar = styled.div`
  background-color: transparent;
  background-color: ${({ inView, theme }) =>
    inView ? "transparent" : theme.mainBg};
  box-shadow: ${({ inView, theme }) => (inView ? "none" : `${theme.sm}`)};
  position: fixed;
  top: 0;
  width: 100%;
  transition: background-color 200ms ease;
  z-index: 3;
  max-width: 100vw;

  div {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: fit-content;
    padding: 1.25rem 0;
    font-size: 1.1rem;
  }
`
