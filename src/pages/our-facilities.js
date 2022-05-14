import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FacilityItems from '../components/facilities/facilityItems'

export default function OurFacilities({data}) {

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const facilitiesData = pageData.citMoreFacilities;

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <FacilityItems data={facilitiesData} /> 
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
        pageMeta {
          metaTitle
          metaDescription
        }
        citMoreFacilities {
          cit_facility_type {
            value
          }
          facility_sec_title
          facility_sec_sub_title
          facility_sec_description
          facility_sec_video_thumb
          facility_sec_video_id
          facility_sec_bg
          cit_facelity_js_items {
            title
            facilityBoxBg
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
          cit_facelity_jp_items {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`
  