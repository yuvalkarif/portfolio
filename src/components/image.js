import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Image({ pic }) {
  const {
    allImageSharp: { edges: data },
  } = useStaticQuery(query)
  const [src, setSrc] = useState(data[0].node.fluid)
  useEffect(() => {
    if (pic) {
      const picData = findImageByPic()
      setSrc(picData)
    }
  }, [pic])

  const findImageByPic = () => {
    const result = data.filter(data => data.node.fluid.originalName === pic)
    return result[0].node.fluid
  }

  return <>{src && <Img fluid={src} alt="Project-Preview" />}</>
}

const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid(quality: 100, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
