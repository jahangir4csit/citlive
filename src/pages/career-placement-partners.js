import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'



export default function CareerPlacementPartners({data}) {

    const jpItemsCollec = data.allWpPage.nodes[0].citMoreFacilities;
    const jpItemsData = jpItemsCollec[0];

    const pageMeta = { title: "ক্যারিয়ার প্লেসমেন্ট পার্টনার" }

    return(
      <Layout>
        <Seo 
        title={'Career Placement Partners'} 
        description={'CIT Career Placement Partners'} />
        <PageDesc data={ pageMeta } />
        <div className="container">
            <div className="jobplacement_partner partner_all mt-3 mb-5">
                <ul >
                    {jpItemsData.cit_facility_type.value === "jobplacement" &&
                        jpItemsData.cit_facelity_jp_items.map(
                            (item, index)=>
                            <li key={index}>
                                {item.featuredImage != null ?
                                <img className="img-fluid" src={item.featuredImage.node.sourceUrl} alt={item.title} />
                                : item.title }
                            </li>
                        )
                    }
                    
                </ul>
            </div>
        </div>
      </Layout>
    )

}

export const query = graphql`
{
    allWpPage(filter: {slug: {eq: "our-facilities"}}) {
        nodes {
          citMoreFacilities {
            cit_facility_type {
              value
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
        }
      }
}
`