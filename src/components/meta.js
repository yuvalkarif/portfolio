import React from "react"
import { Helmet } from "react-helmet"
import Image from "../data/images/memoji.png"
function Meta() {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, shrink-to-fit=no"
      />
      <title>Yuval Karif</title>
      <meta
        name="description"
        content="I am a self-taught software engineer who focuses on web development
          and likes to find new ways to solve problems."
      />
      <meta name="og:title" content="Yuval Karif Portfolio" />
      <meta
        name="og:description"
        content="A self-taught developer who focuses on fullstack development and likes to find new ways to solve problems."
      />
      <meta name="og:image" content={Image} />
    </Helmet>
  )
}

export default Meta
