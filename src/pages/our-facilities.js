import React,{useEffect, useState} from 'react'
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import FacilityItems from '../components/facilities/facilityItems'

import apiFetch from '@wordpress/api-fetch';

export default function OurFacilities({data}) {

  const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    const pageData = data.allWpPage.nodes[0];
    const seo = pageData.pageMeta;
    //const facilitiesData = pageData.citMoreFacilities;
    const postId = pageData.databaseId;

    // get options data from wp
    const [pageDetails, setPageDetails] = useState([]);


    useEffect(() => {

      // GET
      apiFetch( { path: `${WPApi}/pages/${postId}` } ).then( ( pageDetails ) => {
        setPageDetails(pageDetails);
      } );

    }, [])

    return(
      <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <PageDesc data={pageData} />
        <FacilityItems data={pageDetails.cit_more_facilities} /> 
      </Layout>
    )
  
  }

  export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "our-facilities"}}) {
      nodes {
        id
        databaseId
        title
        content
        pageMeta {
          metaTitle
          metaDescription
        }
        
      }
    }
  }
`
  