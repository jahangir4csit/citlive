import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSuccessCaseGrid = () => {
    const data = useStaticQuery(graphql`
    query SuccessCaseGrid {
      allWpSuccessStories(limit: 1000, sort: {order: DESC, fields: dateGmt}) {
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
          successCasesCategories {
            nodes {
              databaseId
            }
          }
        }
        pageInfo {
          perPage
          totalCount
          pageCount
          itemCount
          hasPreviousPage
          hasNextPage
          currentPage
        }
      }
      allWpSuccessCaseCategory(filter: {slug: {nin: "featured"}}) {
        nodes {
          name
          databaseId
        }
      }
      }
    `)
    return data
}