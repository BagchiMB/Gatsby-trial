import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/Layout'
import Image from "gatsby-image"

const ComponentName = ({ data:{product:{title,price,image:{fixed},info:{info},}},}) => {
    return <Layout>
        <div style={{textAlign:"center"}}>
            <Link to="/products">back to products</Link>
            <h1>{title}</h1>
            <h2>{`$${price}`}</h2>
            <Image alt={title} fixed={fixed}/>
            <p>{info}</p>
        </div>
    </Layout>
}

export const query = graphql`
query getSingleProduct($slug:String){
    product: contentfulProduct(slug: {eq: $slug}) {
      price
      title
      image {
        fixed (width:300){
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName