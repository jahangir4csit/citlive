import React,{Fragment, useEffect, useState} from 'react'
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import GalleryGrid from "../components/gallery/galleryGrid"
import apiFetch from '@wordpress/api-fetch';

export default function Gallery({data}) {

  const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    const gdata = pageData.crmGalleryEntry;

    // get options data from wp
    const [getDetails, setDetails] = useState([]);

    useEffect(() => {

      // GET
      apiFetch( { path: `${WPApi}/pages/${pageData.databaseId}` } ).then( ( pageDetails ) => {
        setDetails(pageDetails);
  
      } );
  
    }, []);
  
    console.log(getDetails.crm_gallery_entry, 'gallery page details');

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <GalleryGrid gallaryData={getDetails.crm_gallery_entry} />
      </Layout>
    )
  
  }

  export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "gallery"}}) {
      nodes {
        id
        databaseId
        title
        content
        pageMeta {
          metaTitle
          metaDescription
        }
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
  