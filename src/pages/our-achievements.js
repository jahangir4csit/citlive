import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FeaturedTextTwo from "../components/featuredTextTwo"
import CounterUp2 from "../components/counterUp2"
import TopRatedFreelancer from '../components/achievements/topRatedFreelancer'
import AboutUsDesc from '../components/achievements/aboutUsDesc'
import CitIsoCertified from '../components/citIsoCertified'
import CEObrief from '../components/ceoBrief'
import CITinitiatives from '../components/citInitiatives'


export default function OurAchievements({data}) {
    const pageData = data.allWpPage.nodes[0];
    const topRatedCase = data.allWpSuccessStories.nodes;
    const sectionsData = data.allWpSection.nodes;
    // const initiatives = pageData.initiatives;
    console.log(sectionsData, 'achievements page');

    return(
        <Layout>
            <Seo title={pageData.title} />
            <PageDesc data={pageData} />
            <FeaturedTextTwo />
            <CounterUp2 boxbg />
            <TopRatedFreelancer cases={topRatedCase} />
            {sectionsData.map(
              (section,index)=> 
              {
                switch(section.citShowSection.value){
                  case "cit_about_desc": return <AboutUsDesc 
                  title={section.citAboutDescTitle} 
                  desc={section.citAboutDescContent}
                  images={section.citAboutDescImages}
                  key={index} />
                  case "cit_ceo_brief": return <CEObrief
                  name={section.citCeoName}
                  dsg={section.citCeoDesg}
                  desc={section.citCeoDescription}
                  image={section.citCeoImage}
                  smedia={section.citCeoSocialMedia}
                   key={index} />
                  case "cit_iso_certified": return <CitIsoCertified 
                  title={section.citIsoCertifiedTitle}
                  desc={section.citIsoCertifiedDesc}
                  image={section.citIsoCertifiedImage} 
                  key={index} />
                  case "cit_initiatives": return <CITinitiatives data={section.citInitiatives} key={index} />
                  default: return ''              
                }
              }
            )}
        </Layout>
        )
}

export const pageQuery = graphql`
  query($in: [String] = ["cit_iso_certified", "cit_about_desc", "cit_ceo_brief", "cit_initiatives"]) {
    allWpPage(filter: {slug: {eq: "our-achievements"}}) {
      nodes {
        id
        title
        content
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
    allWpSection(filter: {citShowSection: {value: {in: $in}}}) {
      nodes {
        citAboutDescTitle
        citAboutDescContent
        citAboutDescImages {
          photo
        }
        citIsoCertifiedDesc
        citIsoCertifiedImage
        citIsoCertifiedTitle
        citShowSection {
          value
        }
        citCeoName
        citCeoImage
        citCeoDesg
        citCeoDescription
        citCeoSocialMedia {
          url
          smedia_type {
            label
          }
        }
        citInitiatives {
          initiv_data
          initiv_title
        }
      }
    }
  }
`