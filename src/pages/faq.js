import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FaqGrid from "../components/faq/faqGrid"

export default function Faq({data}) {

    const pageData = data.allWpPage.nodes[0];
    const faqsCollections = pageData.crmFaqsEntry;

    return(
      <Layout>
        <Seo title="gallery" />
        <PageDesc data={pageData} />
        <FaqGrid faqsData={faqsCollections} />
      </Layout>
    )
  
  }

  export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "faq"}}) {
      nodes {
        id
        title
        content
        crmFaqsEntry {
          title
          faqs_item {
            crb_faq_ans
            title
          }
        }
      }
    }
  }
`
  