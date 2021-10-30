import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Memoji({ pic }) {
  const data = useStaticQuery(query)
  console.log(data)

  return <Img fluid={data.file.childImageSharp.fluid} alt="memoji" />
}
const query = graphql`
  {
    file(relativePath: { eq: "images/memoji.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
