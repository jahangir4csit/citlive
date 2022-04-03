import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import AboutDesc from "../components/about/aboutDesc"
import VirtualTour from '../components/virtualTour' 
import FeaturedTextTwo from "../components/featuredTextTwo"
import CounterUp from "../components/counterUp"
import MgtBrief from "../components/about/mgtBrief"
import CITAchievements from "../components/about/citAchievements"
import CITMisionVision from "../components/about/citMisionVision"
import CITStatFull from "../components/citStatFull"
import Branch from "../components/about/branch"
import DepartmentGrid from "../components/departmentGrid"
import OfficeWall from "../components/about/officeWall"

export default function AboutUs({data}) {

  const pageData = data.allWpPage.nodes[0];
  const mgtData = pageData.pageSection.ceoBrief;
  const certified = pageData.pageSection.citCertified;
  const branchInfo = pageData.branchInfo;
  const initiatives = pageData.initiatives;
  const photoWall = pageData.citPhotoWall;
  const statementData = pageData.statementsData;

  return(
    <Layout>
      <Seo title={pageData.title} />
      <AboutDesc data={pageData} />
      <VirtualTour />
      <FeaturedTextTwo />
      <CounterUp />
      <MgtBrief data={mgtData} />
      <CITAchievements data={certified} />
      <CITMisionVision data={statementData} />
      <CITStatFull data={initiatives} />
      <OfficeWall data={photoWall} />
      <Branch data={branchInfo} />
      <DepartmentGrid title="ট্রেইনিং ডিপার্টমেণ্ট" />
    </Layout>
  )

}

export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "about-us"}}) {
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
        citPhotoWall {
          url
        }
      }
    }
  }
`
