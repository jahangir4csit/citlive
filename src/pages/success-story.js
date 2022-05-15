import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CourseSlide from "../components/courses/CoursesSlide"
import { graphql } from "gatsby"
import SuccessStoryGrid from "../components/successCase/successStoryGrid"
import SuccessStoryDesc from "../components/successCase/successStoryDesc"


export default function SuccessStory({data}) {

    const courseData = data.allWpCourseCategory.nodes;
    const page = data.allWpPage.nodes[0];
    const seo = page.pageMeta;

    return(
        <Layout>
            {/*<Seo 
            title={seo.metaTitle} 
            description={seo.metaDescription} />*/}
            <SuccessStoryDesc data={page} />
             <SuccessStoryGrid /> 
            <CourseSlide coursSlide={courseData} /> 
        </Layout>
    )

}


export const query = graphql`
  {
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
              reviewsCount
            }
          }
        }
      }
    }
    allWpPage(filter: {slug: {eq: "success-story"}}) {
        nodes {
          title
          content
        }
    }
  }
`
