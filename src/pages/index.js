import React from "react"
import Header from "../components/header"
import Skills from "../components/skills"
import Projects from "../components/projects"
import "../styles/index.css"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles/theme"
import Main from "../components/main"
import query from "../queries/projectsData"
import Image from "../components/image"
export default function Home() {
  React.useEffect(() => {
    console.log(query)
  }, [query])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
      <Image />
    </ThemeProvider>
  )
}

//👋
