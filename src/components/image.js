import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

export default function Image({ pic }) {
  const {
    allImageSharp: { edges: data },
  } = useStaticQuery(query)
  const [src, setSrc] = useState()

  useEffect(() => {
    if (pic) {
      const picData = findImageByPic()
      setSrc(picData)
    }
  }, [pic])

  const findImageByPic = () => {
    const result = data.filter(data => data.node.parent.name === pic)
    return result[0].node.gatsbyImageData
  }

  return (
    <>
      {pic && (
        <div className="preview">
          {src && <GatsbyImage className="" image={src} alt="image" />}
        </div>
      )}
    </>
  )
}

const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
          )
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
