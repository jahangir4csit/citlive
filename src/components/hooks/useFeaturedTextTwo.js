import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedTextTwo = () => {
    const data = useStaticQuery(graphql`
    query FeaturedTextTwo {
      allWpSection(filter: {databaseId: {eq: 2111}}) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
              title
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