import React from "react"
import Header from "../components/header"
import Skills from "../components/skills"
import Projects from "../components/projects"
import "../styles/index.css"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles/theme"
import Main from "../components/main"
import Contact from "../components/contact"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

//👋
