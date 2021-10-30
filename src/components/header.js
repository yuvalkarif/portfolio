import React from "react"
import { Wrapper, Navbar } from "../styles/header.styles"
import { useInView } from "react-intersection-observer"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Header() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: "100px",
  })
  React.useState(() => {
    console.log(inView)
  }, [inView])
  return (
    <Wrapper ref={ref}>
      <Navbar inView={inView}>
        <div>
          <strong>Yuval Karif</strong>
          <span onClick={() => scrollTo("#skills-section")}>Skills</span>
          <span onClick={() => scrollTo("#projects-section")}>Projects</span>
          <span onClick={() => scrollTo("#contact-section")}>Contact</span>
        </div>
      </Navbar>
    </Wrapper>
  )
}
