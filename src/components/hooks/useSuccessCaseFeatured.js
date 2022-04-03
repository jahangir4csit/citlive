import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedCases = () => {
    const data = useStaticQuery(graphql`
    query SuccessFeaturedCases {
        allWpSuccessStories(
          filter: {successCasesCategories: {nodes: {elemMatch: {slug: {eq: "featured"}}}}}
          limit: 2
          ) {
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
    `)
    return data
}