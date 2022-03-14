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
        <h1>Petunia&rsquo;s House</h1>
        <p>Dis are my home page</p>
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
