import React from "react"
import { Helmet } from "react-helmet"
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
    </Helmet>
  )
}

export default Meta
