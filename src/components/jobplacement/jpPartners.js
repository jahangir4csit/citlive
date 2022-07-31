import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import NumberBn from '../utils/numberBn'
import { Link } from 'gatsby'
import Spinner from 'react-bootstrap/Spinner';
import apiFetch from '@wordpress/api-fetch';


export default function JpPartners(data){

    const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    if (typeof window === 'undefined') {
        global.window = {}
    }

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // get Facilities 
    const [getFacilities, setFacilities] = useState([]);

    useEffect(async() => {
        await apiFetch( { path: `${WPApi}/partners?partners-category=2799` } ).then( ( items ) => {
            setFacilities(items);
            setLoading(false);
        } );

    }, []);


    return(
        <section className='jp_partners mb-5'>
            <div className='container'>
                <div className="col-md-12 job_placement">
                    <div className="row">
                        <div class="col-md-12 text-center">
                            <h2 className="font-600 pb-4">যে সকল কোম্পানির সাথে আমরা যুক্ত</h2>
                            <div class="jobplacement_partner text-center partner_all pt-3 pb-4">
                                <h3 className='pt-3'>(ক্যারিয়ার প্লেসমেন্ট পার্টনার)</h3>
                                {loading ? <Spinner className='text-center' animation="grow" variant="danger" /> :
                                <ul>
                                    { 
                                    getFacilities.length > 0 &&
                                        getFacilities.map(
                                            item=>
                                            <li>
                                                {item.better_featured_image != null ?
                                                <img class="img-fluid" src={item.better_featured_image.source_url} alt={item.alt_text} />
                                                : item.title }
                                            </li>
                                        )
                                    }
                                </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
