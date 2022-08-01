import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import JpPageDesc from '../components/jobplacement/jpPageDesc'
//import FacilityItems from '../components/facilities/facilityItems'
import JpSuccessStories from '../components/jobplacement/successStories'
import JpDepartmentGrid from "../components/jobplacement/jobDepartments"
import JpOverview from '../components/jobplacement/overview'
import JpPartners from '../components/jobplacement/jpPartners'

export default function JobPlacement({data}) {

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    //const facilitiesData = pageData.citMoreFacilities;
    const successStories = data.allWpSuccessStories.nodes;

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <JpPageDesc data={pageData} />
        <JpOverview data={pageData.crmJpOverviewEntry} />
        <JpPartners />
        <JpDepartmentGrid title={pageData.jobDeptTitle} data={pageData.citJpDepartment} />
        <JpSuccessStories data={successStories} secHeading={pageData.jpSuccessCaseTitle} />
        <div className="container">
            <div className="col-12">
                <div className="section_heading">
                    <h2 style={{ fontSize: '38px' }} dangerouslySetInnerHTML={{ __html: 'তাই আর অপেক্ষা কেনো? পাঠিয়ে দিন আপনার সিভি' }} />
                    <p className="pb-3" dangerouslySetInnerHTML={{ __html: "এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে কোন একটি পদ্ধতিতে ভর্তি হতে পারো " }} />
                </div>
                <div className="col-12">
                    <div className="course_free_facilities_btn text-center mt-0">
                        <a href="https://itechcv.com/login" target="_blank">ক্লিক করুন</a>
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
      jobplacementDescription {
        jpPageVideoId
        jpPageButtonLink
        videoThumb {
          sourceUrl
          altText
        }
      }
      
      crmJpOverviewEntry {
        title
        overview_desc
        overview_img
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