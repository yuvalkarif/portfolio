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
      <meta name="title" content="Yuval Karif" />
      <meta
        name="description"
        content="I am a self-taught software engineer who focuses on web development and likes to find new ways to solve problems."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yuvalkarif.com/" />
      <meta property="og:title" content="Yuval Karif" />
      <meta
        property="og:description"
        content="I am a self-taught software engineer who focuses on web development and likes to find new ways to solve problems."
      />
      <meta property="og:image" content={Image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuvalkarif.com/" />
      <meta property="twitter:title" content="Yuval Karif" />
      <meta
        property="twitter:description"
        content="I am a self-taught software engineer who focuses on web development and likes to find new ways to solve problems."
      />
      <meta property="twitter:image" content={Image} />
    </Helmet>
  )
}

export default Meta
