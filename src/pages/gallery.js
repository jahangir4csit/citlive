import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import GalleryGrid from "../components/gallery/galleryGrid"

export default function Gallery({data}) {

    const pageData = data.allWpPage.nodes[0];
    const gdata = pageData.crmGalleryEntry;

    return(
      <Layout>
        <Seo title="gallery" />
        <PageDesc data={pageData} />
        <GalleryGrid gallaryData={gdata} />
      </Layout>
    )
  
  }

  export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "gallery"}}) {
      nodes {
        id
        title
        content
        crmGalleryEntry {
            title
            crb_media_gallery {
              sourceUrl
              title
            }
          }
      }
    }
  }
`
  