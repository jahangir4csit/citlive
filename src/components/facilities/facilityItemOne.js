import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import NumberBn from '../utils/numberBn'
import { Link } from 'gatsby'
import Spinner from 'react-bootstrap/Spinner';


export default function FacilityItemOne(data){

    const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    const facilityDetails = data.itemData ? data.itemData : [];

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // get Facilities 
    const [getFacilities, setFacilities] = useState([]);

    useEffect(() => {
          
        //get Facility data
          const faciData = Promise.all(
            facilityDetails.cit_facelity_jp_items ?
            facilityDetails.cit_facelity_jp_items.map(async (itemId) =>
             await (await fetch(`${WPApi}/partners/${itemId.id}`)).json())
            :  setFacilities(0)
          )
          .then((values) => {
            setFacilities(values);
            setLoading(false);
          })
          .catch(err => console.error(err));

    }, []);

    

    return(
        <div className="col-md-12 job_placement" style={{ backgroundColor: facilityDetails.facility_sec_bg}}>
            <div className="row">
                <div class="col-md-6">
                    <div class="job_placement_contant">
                        <ul>
                            <li><h3 dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_title }} /></li>
                            <li dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_sub_title }} />
                        </ul>
                        <article>
                            <p dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
                        </article>
                    </div>
                    <div class="job_placement_contant_img">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={facilityDetails.facility_sec_video_id} onClose={() => setOpen(false)} />
                        <img class="img-fluid w-100" src={facilityDetails.facility_sec_video_thumb} alt="image" onClick={()=> setOpen(true)} />
                        <div class="overly_icon">
                            <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="jobplacement_partner text-center">
                        <h3 className='pt-3'>ক্যারিয়ার প্লেসমেন্ট পার্টনার</h3>
                        {loading ? <Spinner className='text-center' animation="grow" variant="danger" /> :
                        <ul>
                            { 
                            getFacilities.length > 0 &&
                                getFacilities.slice(0, 14).map(
                                    item=>
                                    <li>
                                        {item.better_featured_image != null ?
                                        <img class="img-fluid" src={item.better_featured_image.source_url} alt={item.alt_text} />
                                        : item.title }
                                    </li>
                                )
                            }
                            
                            {getFacilities.length > 14 &&
                            
                            <li>
                                <Link 
                                to="/career-placement-partners/">
                                    <p>+<NumberBn number={getFacilities.length - 14} />
                                    <span>প্রতিষ্টান</span></p>
                                </Link>
                            </li>
                            }
                        </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



