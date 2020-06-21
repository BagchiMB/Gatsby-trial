import React from 'react';
import {graphql,useStaticQuery} from 'gatsby'
import img from '../images/img-4.jpg'
import Image from 'gatsby-image'
import './image.css'

const getImages=graphql`
{
    fixed:file(relativePath:{eq:"img-4.jpg"}){
      childImageSharp{
        fixed(width:300,height:400){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid:file(relativePath:{eq:"image-3.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Imageo = () => {
    const data=useStaticQuery(getImages)
    console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
                <img alt="try" src={img} width="100%"/>
            </article>
            <article className="single-image">
                <h3>Fixed Image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
            </article>
        </section>
    );
}

export default Imageo;