import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import InstructorDesc from "../components/instructors/instructorDesc"
import CourseSlide from '../components/courses/CoursesSlide'
import InstructorsList from "../components/instructors/instructorsList"


export default function Instructors({data} = JSON.stringify(data, null, 5)) {

  const pageData = data.allWpPage.nodes[0];
  const departmentInfo = data.allWpPage.nodes[0].department_info;
  const courseData = data.allWpCourseCategory.nodes;

  return(
    <Layout>
      <Seo title={pageData.title} />
      <InstructorDesc data={pageData} departData={departmentInfo} />
      <InstructorsList />
      <CourseSlide coursSlide={courseData} />
    </Layout>
  )

}
export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "instructors-teachers"}}) {
      nodes {
        id
        title
        content
        department_info {
          departmentInfo {
            boxColor
            departmentIcon {
              sourceUrl
            }
            deptTitle
            departmentNumber
          }
          mentorsInfo {
            departmentIcon {
              sourceUrl
            }
            menorsBoxColor
            mentorsNumber
            mentorsTitle
          }
          supportInfo {
            supportTitle
            supportsBoxColor
            supportsNumber
            supportsIcon {
              sourceUrl
            }
          }
        }
      }
    }
    allWpCourseCategory {
      nodes {
        name
        slug
        link
        termTaxonomyId
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
        courses {
          nodes {
            id
            title
            excerpt
            slug
            courseCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            course_options {
              courseFee
              discountFee
              studentsIn
            }
          }
        }
      }
    }
  }
`