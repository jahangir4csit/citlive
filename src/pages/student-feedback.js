import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import StudentReviewsGrid from '../components/reviews/studentReviewsGrid'


export default function StudentsFeedback({data}) {

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const reviewsData = data.allWp.nodes[0];

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <StudentReviewsGrid data={reviewsData} /> 
      </Layout>
    )

}

export const query = graphql`
{
  allWpPage(filter: {slug: {eq: "student-feedback"}}) {
    nodes {
      id
      title
      content
      pageMeta {
        metaTitle
        metaDescription
      }
    }
  }
  allWp {
    nodes {
      crbThemeOptions {
        citReviewsFacebook
        citReviewsGoogle
        crbFacebookReviews {
          crb_fb_review_url
        }
        crbGooogleReviews {
          crb_goo_review_url
        }
      }
    }
  }
}
`