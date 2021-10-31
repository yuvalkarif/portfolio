import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, useCycle } from "framer-motion"

export default function Image({ pic }) {
  const {
    allImageSharp: { edges: data },
  } = useStaticQuery(query)
  const [src, setSrc] = useState()
  const [opacity, setOpacity] = React.useState(0)
  const delay = 200
  useEffect(() => {
    console.log(data)
    if (pic) {
      const picData = findImageByPic()
      setOpacity(0)
      setSrc(picData)
      setTimeout(() => {
        setOpacity(1)
      }, delay)
    }
  }, [pic])

  const findImageByPic = () => {
    const result = data.filter(data => data.node.parent.name === pic)
    return result[0].node.gatsbyImageData
  }

  return (
    <>
      {pic && (
        <motion.div
          className="preview"
          animate={{ opacity: opacity }}
          transition={{ duration: delay / 1000, type: "spring" }}
        >
          {src && <GatsbyImage className="" image={src} alt="image" />}
        </motion.div>
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
