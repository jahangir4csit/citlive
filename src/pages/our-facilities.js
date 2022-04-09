import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FacilityItems from '../components/facilities/facilityItems'

export default function OurFacilities({data}) {

    const pageData = data.allWpPage.nodes[0];

    return(
      <Layout>
        <Seo title="Our Facilities" />
        <PageDesc data={pageData} />
        <FacilityItems />
      </Layout>
    )
  
  }

  export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "our-facilities"}}) {
      nodes {
        id
        title
        content
      }
    }
  }
`
  