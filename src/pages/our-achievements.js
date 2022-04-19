import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FeaturedTextTwo from "../components/featuredTextTwo"
import CounterUp2 from "../components/counterUp2"
import CITStatFull from '../components/citStatFull'


export default function OurAchievements({data}) {
    const pageData = data.allWpPage.nodes[0];
    const initiatives = pageData.initiatives;
    console.log(pageData, 'achievements page');

    return(
        <Layout>
            <Seo title={pageData.title} />
            <PageDesc data={pageData} />
            <FeaturedTextTwo />
            <CounterUp2 />
            <CITStatFull data={initiatives} />
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
      }
    }
  }
`