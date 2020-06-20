import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData=graphql`
query {
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

const ComponentName = () => {
    const {
        site:{
            info:{
              title,
              person:{
                name,
                age
              }
            }
          }
    }=useStaticQuery(getData)
    return (
        <div>
            <h2>{title}</h2>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
}

export default ComponentName
