import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Wrapper,
  Titles,
  Title,
  Content,
  Button,
  AltButton,
  Buttons,
  Description,
} from "../styles/projects.styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Projects() {
  const {
    allMarkdownRemark: { edges: data },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(format: PLAIN)
            frontmatter {
              title
              code
              live
              img
              browse
            }
          }
        }
      }
    }
  `)

  const [currentPreview, setCurrentPreview] = useState(data[0].node)
  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <Wrapper>
      <div>
        <h2>Projects</h2>{" "}
        <div>
          <Content>
            {/* <Img fluid={`../images/${currentPreview.frontmatter.img}`} /> */}
            <Description>
              <h4>{currentPreview.frontmatter.title}</h4>
              <p>{currentPreview.excerpt}</p>
              <Buttons>
                <Button>Live Site</Button>
                <AltButton>Code</AltButton>
              </Buttons>
            </Description>
          </Content>
          <Titles>
            <Title selected={true}>Social Media</Title>
            <Title>Blog</Title>
            <Title>Forum</Title>
            <Title>Social Media Viewer</Title>
            <Title>AI Interface</Title>
          </Titles>

          {/* <p>
            Follow my blog written using a markdown editor, secure authorization
            and comment you thoughts.
          </p>
          <p>
            View submissions, enter special codes to gain access to more
            features and to take part.
          </p>
          <p>
            Let the AI sniff your picture and decide whether it's a dog or a cat
            !
          </p> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
