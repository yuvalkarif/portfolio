import React from "react"
import { Wrapper } from "../styles/main.styles"

import Memoji from "./memoji"

export default function Main() {
  return (
    <Wrapper>
      <div>
        <div>
          <h1>Hi I'm Yuval</h1>
          <span>Full Stack Web Developer.</span>
          <p>
            A self-taught developer who focuses on fullstack development and
            likes to find new ways to solve problems.
          </p>
        </div>
        <Memoji />
      </div>
    </Wrapper>
  )
}
