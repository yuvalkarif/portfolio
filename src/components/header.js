import React from "react"
import { Wrapper, Navbar } from "../styles/header.styles"
import { useInView } from "react-intersection-observer"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "82px",
    initialInView: true,
  })
  return (
    <Wrapper ref={ref} className="header-wrapper">
      <Navbar inView={inView}>
        <div>
          <strong>Yuval Karif</strong>
          <button type="button" onClick={() => scrollTo("#skills-section")}>
            Skills
          </button>
          <button type="button" onClick={() => scrollTo("#projects-section")}>
            Projects
          </button>
          <button type="button" onClick={() => scrollTo("#contact-section")}>
            Contact
          </button>
        </div>
      </Navbar>
    </Wrapper>
  )
}
