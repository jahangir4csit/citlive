import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FeaturedTextAchv from "../components/achievements/featuredTextAchv"
import CounterUp2 from "../components/counterUp2"
import TopRatedFreelancer from '../components/achievements/topRatedFreelancer'
import AboutUsDesc from '../components/achievements/aboutUsDesc'
import CitIsoCertified from '../components/citIsoCertified'
import CEObrief from '../components/ceoBrief'
import CITinitiatives from '../components/citInitiatives'
import MilestoneSlider from '../components/about/milestoneSlider'


export default function OurAchievements({data}) {
    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const topRatedCase = data.allWpSuccessStories.nodes;
    const featuredText = pageData.featuredTextAchivements;
    const sectionsData = data.allWpSection.nodes;
    // const initiatives = pageData.initiatives;

    return(
        <Layout>
            <Seo 
            title={seo.metaTitle} 
            description={seo.metaDescription} />
            <PageDesc data={pageData} />
            <FeaturedTextAchv ftData={featuredText} />
            {sectionsData.map(
              (section,index)=> 
              {
                switch(section.citShowSection.value){
                  case "cit_milestone": return <MilestoneSlider milestoneData={section.citMilestones} key={index} />
                  case "cit_initiatives": return <CITinitiatives classes={'pt45 pb45'} data={section.citInitiatives} key={index} />
                  default: return ''              
                }
              }
            )}
            <CounterUp2 boxbg />
            <TopRatedFreelancer cases={topRatedCase} />
        </Layout>
        )
}

export const pageQuery = graphql`
  query($in: [String] = ["cit_milestone", "cit_initiatives"]) {
    allWpPage(filter: {slug: {eq: "our-achievements"}}) {
      nodes {
        id
        title
        content
        pageMeta {
          metaTitle
          metaDescription
        }
        featuredTextAchivements {
          title
          subheading
          description
          image {
            altText
            sourceUrl
          }
        }
      }
    }
    allWpSuccessStories(
      filter: {successCasesCategories: {nodes: {elemMatch: {name: {eq: "Featured"}}}}}
    ) {
      nodes {
        successStoryLink {
          successStoryLink
        }
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
    }
    allWpSection(sort: {order: DESC, fields: date}, filter: {citShowSection: {value: {in: $in}}}) {
      nodes {
        citMilestones {
          milst_desc
          milst_image
          milst_title
        }
        citInitiatives {
          initiv_data
          initiv_title
        }
        citShowSection {
          value
        }
      }
    }
  }
`