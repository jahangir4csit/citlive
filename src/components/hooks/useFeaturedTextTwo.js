import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedTextTwo = () => {
    const data = useStaticQuery(graphql`
    query FeaturedTextTwo {
      allWpSection(filter: {databaseId: {eq: 2112}}) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          citFeaturedTextDesc
          citFeaturedTextSubheading
          featuredTextBtn {
            button_title
            button_url
          }
        }
      }
    }
    `)
    return data
}