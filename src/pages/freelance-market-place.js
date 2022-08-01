import React,{useEffect, useState} from 'react'
//import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageDesc from '../components/pageDesc'
import apiFetch from '@wordpress/api-fetch';
import Spinner from 'react-bootstrap/Spinner';


export default function FreelanceMarketPlace() {

    const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    const pageMeta = { title: "ফ্রিল্যান্সিং মার্কেটপ্লেস" }

    const [loading, setLoading] = useState(true);
    const [getFacilities, setFacilities] = useState([]);

    useEffect(() => {
        // GET
        apiFetch( { path: `${WPApi}/pages/3431` } ).then( ( pageDetails ) => {
            //get Facility data
            const faciData = Promise.all(
            pageDetails.cit_more_facilities ?
            pageDetails.cit_more_facilities[1].cit_facelity_js_items.map(async (itemId) =>
                await (await fetch(`${WPApi}/citoptions/${itemId.id}`)).json())
            :  setFacilities(0)
            )
            .then((values) => {
            setFacilities(values);
            setLoading(false);
            })
            .catch(err => console.error(err));

        });

    }, []);

    return(
      <Layout>
        <Seo 
        title={'Career Placement Partners'} 
        description={'CIT Career Placement Partners'} />
        <PageDesc data={ pageMeta } />
        <div className="container">
            <div className="jobplacement_partner partner_all mt-3 mb-5  text-center">
                {loading ? <Spinner className='text-center' animation="grow" variant="danger" /> :
                <ul >
                    {getFacilities.length > 0 &&
                        getFacilities.map(
                            (item, index)=>
                            <li key={index}>
                                {item.better_featured_image != null ?
                                <img className="img-fluid" src={item.better_featured_image.source_url} alt={item.alt_text} />
                                : item.title }
                            </li>
                        )
                    }
                    
                </ul>
                }   
            </div>
        </div>
      </Layout>
    )

}
