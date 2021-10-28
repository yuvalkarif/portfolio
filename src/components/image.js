import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Image() {
  const {
    allImageSharp: { edges: data },
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      {/* <Img
        // fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      /> */}
    </div>
  )
}
