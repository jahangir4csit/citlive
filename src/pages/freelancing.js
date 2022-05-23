import React from "react"
import { graphql } from "gatsby"
import LazyLoad from 'react-lazyload';
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FacilityItems from '../components/facilities/facilityItems'
import JpSuccessStories from '../components/jobplacement/successStories'
import JpDepartmentGrid from "../components/jobplacement/jobDepartments"
import CounterUp from "../components/counterUp"
import CITinitiatives from '../components/citInitiatives'
import FrForWhome from '../components/freelancing/forWhome'
import FrJobMarkets from '../components/freelancing/jobMarket'
import PhotoWall from "../components/photoWall"

export default function Freelancing({data}) {

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const facilitiesData = pageData.citMoreFacilities;
    const successStories = data.allWpSuccessStories.nodes;
    const sectionsData = data.allWpSection.nodes;

    const photoWall = sectionsData[0].citPhotoWall;
    const initiativeData = sectionsData[1].citInitiatives;

    const marketPlaces = pageData.citFacelityJsItems;
    const forWhomesData = pageData.citFrFreelancingItem; 

    console.log(sectionsData, 'Section Data');

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <FacilityItems data={facilitiesData} />
        <CounterUp />
        {forWhomesData.length > 0 &&
        <FrForWhome data={forWhomesData} />
        }
        <LazyLoad once>
          <CITinitiatives marginBottom data={initiativeData} title="ফ্রিল্যান্সিং নিয়ে আমাদের অসাধারণ কিছু উদ্যোগ" />
        </LazyLoad>
        
        <JpDepartmentGrid title={pageData.jobDeptTitle} data={pageData.citJpDepartment} />
        {marketPlaces.length > 0 &&
          <FrJobMarkets data={marketPlaces}/>
        }
        <LazyLoad once>
          <PhotoWall data={photoWall} />
        </LazyLoad>
        <JpSuccessStories data={successStories} secHeading={pageData.jpSuccessCaseTitle} />
      </Layout>
    )

}

export const query = graphql`
query($in: [String] = ["cit_initiatives", "cit_photoWall"]) {
  allWpPage(filter: {slug: {eq: "freelancing"}}) {
    nodes {
      id
      title
      content
      pageMeta {
        metaTitle
        metaDescription
      }
      citFacelityJsItems {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      citFrFreelancingItem {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
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
      jobDeptTitle
      citJpDepartment {
        name
        slug
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
      }
      jpSuccessCaseTitle
    }
  }
  allWpSuccessStories(limit: 6) {
    nodes {
      successStoryLink {
        successStoryLink
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  allWpSection(filter: {citShowSection: {value: {in: $in}}}) {
    nodes {
      citInitiatives {
        initiv_data
        initiv_title
      }
      citPhotoWall {
        sourceUrl
      }
      citShowSection {
        value
      }
    }
  }
  
}
`