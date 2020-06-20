import React from 'react';
import Layout from '../components/Layout'
import FirstQuery from '../Examples/FirstQuery'
import {graphql} from "gatsby"


const examples = ({data}) => {
    const {
        site: {
            info: {author}
        }
    }=data

    return (
        <Layout>
            <h1>hello from Examples</h1>
            <FirstQuery />
            <p>{author}</p>
        </Layout>
    );
};

export const data= graphql`
{
    site{
      info:siteMetadata{
        title
        description
        author
        data
        person{
          name
          age
        }
      }
    }
  }
`

export default examples;