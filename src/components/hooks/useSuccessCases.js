import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSuccessCases = () => {
    const data = useStaticQuery(graphql`
    query SuccessCases {
        allWpSuccessCaseCategory(filter: {slug: {nin: "featured"}}) {
            nodes {
              name
              uri
              slug
              successStory {
                nodes {
                  title
                  successStoryLink {
                    successStoryLink
                  }
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
      }
    `)
    return data
}