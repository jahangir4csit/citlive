import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useTopbarQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWp {
        nodes {
          crbThemeOptions {
            citPhone
            citEmail
          }
        }
      }
    }
  `)
  return data.allWp.nodes[0]
}

