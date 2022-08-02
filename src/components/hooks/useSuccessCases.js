import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSuccessCases = () => {
    const data = useStaticQuery(graphql`
    query SuccessCases($exc: [String] = ["featured", "top-rated-freelancer"]) {
        allWpSuccessCaseCategory(filter: {slug: {nin: $exc}}) {
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