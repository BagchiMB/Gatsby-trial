import React from 'react';
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

export const query= graphql`
{
    allContentfulProduct {
      nodes {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        price
        slug
        title
      }
    }
  }
`

const product = ({data}) => {
    const {allContentfulProduct:{nodes: products}}=data
    const helper = ()=>
    {
        
    }
    return (
        <Layout>
            <section className="Products">
                {products.map(p=>{
                    return <article key={p.id} className="Product">
                        <Image fluid={p.image.fluid} alt={p.title} ></Image>
                        <h3>{p.title} <span>{p.price}</span></h3>
                        <Link to={`/products/${p.slug}`}>More details</Link>
                    </article>
                })}
            </section>           
        </Layout>
    );
};

export default product;