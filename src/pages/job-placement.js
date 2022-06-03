import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FacilityItems from '../components/facilities/facilityItems'
import JpSuccessStories from '../components/jobplacement/successStories'
import JpDepartmentGrid from "../components/jobplacement/jobDepartments"
import JpOverview from '../components/jobplacement/overview'

export default function JobPlacement({data}) {

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const facilitiesData = pageData.citMoreFacilities;
    const successStories = data.allWpSuccessStories.nodes;

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <JpOverview data={pageData.crmJpOverviewEntry} />
        <FacilityItems data={facilitiesData} />
        <JpDepartmentGrid title={pageData.jobDeptTitle} data={pageData.citJpDepartment} />
        <JpSuccessStories data={successStories} secHeading={pageData.jpSuccessCaseTitle} />
        <div className="container">
            <div class="col-12">
                <div class="section_heading">
                    <h2 style={{ fontSize: '38px' }} dangerouslySetInnerHTML={{ __html: 'তাই আর অপেক্ষা কেনো? পাঠিয়ে দিন আপনার সিভি' }} />
                    <p className="pb-3" dangerouslySetInnerHTML={{ __html: "এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে কোন একটি পদ্ধতিতে ভর্তি হতে পারো " }} />
                </div>
                <div class="col-12">
                    <div class="course_free_facilities_btn text-center mt-0">
                        <a href="#">ক্লিক করুন</a>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    )

}

export const query = graphql`
{
  allWpPage(filter: {slug: {eq: "job-placement"}}) {
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
      crmJpOverviewEntry {
        overview_desc
        title
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
  allWpSuccessStories(
    filter: {successCasesCategories: {nodes: {elemMatch: {name: {eq: "Career & Placement"}}}}}
  ) {
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
}
`