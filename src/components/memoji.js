import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Memoji({ pic }) {
  const data = useStaticQuery(query)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="memoji"
    />
  )
}
const query = graphql`
  {
    file(relativePath: { eq: "images/memoji.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 90)
      }
    }
  }
`
