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
import Image from "../components/image"

function Projects() {
  const {
    allMarkdownRemark: { edges: data },
  } = useStaticQuery(query)

  const [index, setIndex] = useState(0)
  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <Wrapper>
      <div>
        <h2>Projects</h2>{" "}
        <div>
          <Content>
            <Image className="preview" pic={data[index].node.frontmatter.img} />
            <Description>
              <h4>{data[index].node.frontmatter.title}</h4>
              <p>{data[index].node.excerpt}</p>
              <Buttons>
                <a href={data[index].node.frontmatter.live}>
                  <Button>Live Site</Button>
                </a>
                <a href={data[index].node.frontmatter.code}>
                  <AltButton>Code</AltButton>
                </a>
              </Buttons>
            </Description>
          </Content>
          <Titles>
            {data &&
              data.map((data, i) => {
                return (
                  <Title
                    selected={index === i}
                    onClick={() => setIndex(i)}
                    // whileHover={{ x: 10 }}
                    animate={{ scale: index === i ? 1.25 : 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {data.node.frontmatter.browse}
                  </Title>
                )
              })}
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

const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
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
`
