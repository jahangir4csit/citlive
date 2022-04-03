import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCourseCat = () => {
    const data = useStaticQuery(graphql`
    query getCourseCat {

        allWpCourseCategory {
            nodes {
              name
              slug
              link
            }
          }

      }
    `)
    return data
}