import * as React from "react"
import Layout from '../components/layout'
import useCarouseldata from "../hooks/use-carouseldata"

// styles


// markup
const IndexPage = () => {
  const data = useCarouseldata();
  return (
    <Layout>
      <h1>Welcome to sample project</h1>
      { data.map(carousel => {
        const { image, title } = carousel.frontmatter;
        return <>
        <p>{title}</p>
        <img src={image.replace("/static",'')} alt={title} height="500" width="500"/>
        </>
      })
      }
      <pre>{JSON.stringify(data,null,2)}</pre>
    </Layout>
  )
}

export default IndexPage
