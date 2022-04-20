import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCourses = () => {
    const data = useStaticQuery(graphql`
    {
      allWpCourse {
        nodes {
          title
        }
      }
    }
  `)
    return data
}