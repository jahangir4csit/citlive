import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FeaturedTextTwo from "../components/featuredTextTwo"
import CounterUp2 from "../components/counterUp2"


export default function OurAchievements({data}) {
    const pageData = data.allWpPage.nodes[0];
    console.log(pageData, 'achievements page');

    return(
        <Layout>
            <Seo title={pageData.title} />
            <PageDesc data={pageData} />
            <FeaturedTextTwo />
            <CounterUp2 />
        </Layout>
        )
}

export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "our-achievements"}}) {
      nodes {
        id
        title
        content
        pageSection {
          aboutLogo {
            aboutLogo {
              sourceUrl
            }
            aboutLogo2 {
              sourceUrl
            }
          }
          ceoBrief {
            description
            designation
            name
            photo {
              sourceUrl
            }
            socialMedia {
              facebook
              instagram
              linkedin
              twitter
            }
          }
          citCertified {
            title
            description
            photo {
              sourceUrl
            }
          }
        }
        statementsData {
          cit_state_title
          cit_state_icon
          cit_state_details_image
          cit_state_desc
        }
        branchInfo {
          box_color
          branch_address
          branch_title
        }
        initiatives {
          initiv_data
          initiv_title
        }
      }
    }
  }
`