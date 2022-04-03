import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useInstructors = () => {
    const data = useStaticQuery(graphql`
    query getInstructors {

      allWpCourseCategory(
        filter: {instructors: {nodes: {elemMatch: {title: {ne: "null"}}}}}
      ) {
        nodes {
          name
          slug
          instructors {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              mentorTrainingExperiences
              mentorSpecializations {
                title
              }
              mentorDsg
              mentorStudents
              mentorPosition
              instructorsWorkplace {
                mentorWorkplace {
                  ... on WpCitoption {
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
              mentorAchievements {
                url
              }
              mentorEducations {
                title
              }
              mentorWorkexperiences {
                title
              }
            }
          }
        }
      }

      }
    `)
    return data
}