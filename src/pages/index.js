import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageFeed from "../components/ImageFeed"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="max-w max-gl">
      <div className="pa-2">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    </div>
    <ImageFeed />
    <div className="max-w max-gl">
      <div className="pa-2">
        <Link to="/using-typescript/">
          Go to &ldquo;Using TypeScript&rdquo;
        </Link>{" "}
        <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
