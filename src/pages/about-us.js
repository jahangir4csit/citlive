import React from "react"
import { graphql } from "gatsby"
import LazyLoad from 'react-lazyload';
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
  const seo = pageData.pageMeta;
  const mgtData = pageData.pageSection.ceoBrief;
  const certified = pageData.pageSection.citCertified;
  const branchInfo = pageData.branchInfo;
  const initiatives = pageData.initiatives;
  const photoWall = pageData.citPhotoGallery;
  const statementData = pageData.statementsData;
  const vitrualTour = data.allWpSection.nodes[0];

  return(
    <Layout>
      <Seo 
      title={seo.metaTitle} 
      description={seo.metaDescription} />
      <AboutDesc data={pageData} />
      <LazyLoad once>
        <VirtualTour vData={vitrualTour} />
      </LazyLoad>
      <FeaturedTextTwo />
      <CounterUp />
      <MgtBrief data={mgtData} />
      <CITAchievements data={certified} />
      <CITMisionVision data={statementData} />
      <CITStatFull data={initiatives} />
      <LazyLoad once>
        <OfficeWall data={photoWall} />
      </LazyLoad>
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
        pageMeta {
          metaTitle
          metaDescription
        }
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
              altText
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
              altText
            }
          }
        }
        statementsData {
          cit_state_title
          cit_state_icon
          cit_state_details_image
          image_alt_text
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
        citPhotoGallery {
          sourceUrl
          altText
        }
      }
    }
    allWpSection(filter: {isContentNode: {}, databaseId: {eq: 4367}}) {
      nodes {
        citVirtualTourIframe
        databaseId
      }
    }
  }
`
