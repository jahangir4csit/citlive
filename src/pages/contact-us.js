import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ContactDesc from "../components/contact/contactDesc"
import ContactOne from "../components/contact/contactOne"
import ContactTwo from "../components/contact/contactTwo"
import ContactForm from "../components/contact/contactForm"

export default function ContactUs({data}){

  const pageData = data.allWpPage.nodes[0];
  const branches = pageData.contactInfo;
  const courseList = data.allWpCourse.nodes;

  console.log(branches, 'Braches');
  return(
    <Layout>
      <Seo title="Contact CIT" />
      <ContactDesc data={pageData} />
      {branches.map(
        branch=>(
          <ContactOne data={branch} />
        )
      )}
      <ContactForm courseList={courseList} />
  </Layout>
  )
}

export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "contact-us"}}) {
      nodes {
        id
        title
        content
        contactInfo {
          branch_address
          branch_email
          branch_map
          branch_phone
          branch_schedule
          branch_title
        }
      }
    }
    allWpCourse {
      nodes {
        title
      }
    }
  }
`
