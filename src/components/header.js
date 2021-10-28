import React from "react"
import { Wrapper, Navbar } from "../styles/header.styles"
import { useInView } from "react-intersection-observer"

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
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </Navbar>
    </Wrapper>
  )
}
