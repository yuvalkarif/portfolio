import React, { useState } from "react"
import {
  Wrapper,
  Titles,
  Title,
  Content,
  Button,
  AltButton,
  Buttons,
  Description,
  TitleWrapper,
} from "../styles/projects.styles"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"

function Projects() {
  const {
    allMarkdownRemark: { edges: data },
  } = useStaticQuery(query)

  const [index, setIndex] = useState(0)
  return (
    <Wrapper id={"projects-section"}>
      <div>
        <h2>Projects</h2>{" "}
        <div>
          <Content>
            <Image className="preview" pic={data[index].node.frontmatter.img} />
            <Titles>
              {data &&
                data.map((data, i) => {
                  return (
                    <Title
                      selected={index === i}
                      onClick={() => setIndex(i)}
                      animate={{ scale: index === i ? 1.3 : 1 }}
                      style={{ originX: 0 }}
                      transition={{
                        duration: 0.15,
                        damping: 20,
                      }}
                      initial={false}
                      key={i}
                    >
                      {data.node.frontmatter.browse}
                    </Title>
                  )
                })}
            </Titles>
            <Description>
              <div>
                <h4>{data[index].node.frontmatter.title}</h4>
                <p>{data[index].node.excerpt}</p>
              </div>
              <Buttons>
                <a
                  href={data[index].node.frontmatter.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AltButton role="button">Code</AltButton>
                </a>
                <a
                  href={data[index].node.frontmatter.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <Button role="button">Live Site</Button>
                </a>
              </Buttons>
            </Description>
          </Content>
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
