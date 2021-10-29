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
  }
  span {
    color: ${({ theme }) => theme.title500};
    font-weight: 700;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.title50};
      color: ${({ theme }) => theme.title700};
    }
  }
`
export const Navbar = styled.div`
  background-color: ${({ inView, theme }) => (inView ? "none" : theme.mainBg)};
  box-shadow: ${({ inView, theme }) => (inView ? "none" : `${theme.sm}`)};
  position: fixed;
  width: 100%;
  transition: background-color 200ms ease;
  z-index: 3;

  div {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: fit-content;
    padding: 1.25rem 0;
    font-size: 1.1rem;
  }
`
