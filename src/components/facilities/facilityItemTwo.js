import React,{useEffect, useState} from 'react'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons' 
import NumberBn from '../utils/numberBn'
import Spinner from 'react-bootstrap/Spinner';



export default function FacilityItemTwo(data){

    const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';
    const facilityDetails = data.itemData ? data.itemData : [];

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(true);

    // get Facilities 
    const [getFacilities, setFacilities] = useState([]);

    useEffect(() => {
          
        //get Facility data
          const faciData = Promise.all(
            facilityDetails.cit_facelity_js_items ?
            facilityDetails.cit_facelity_js_items.map(async (itemId) =>
             await (await fetch(`${WPApi}/citoptions/${itemId.id}`)).json())
            :  setFacilities(0)
          )
          .then((values) => {
            setFacilities(values);
            setLoading(false);
          })
          .catch(err => console.error(err));

    }, []);

    console.log(getFacilities, 'api2 items faci');
    console.log(facilityDetails, 'page content2');

    return(
        <div className="col-md-12 job_placement" style={{ backgroundColor: facilityDetails.facility_sec_bg}}>
            <div className="row">
                <div class="col-md-6">
                    <div class="job_placement_contant freelancing">
                        <ul>
                            <li><h3 dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_title }} /></li>
                            <li dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_sub_title }} />
                        </ul>
                        <article>
                            <p dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
                        </article>
                    </div>
                    <div class="job_placement_contant_img">
                        <img class="img-fluid w-100" src={facilityDetails.facility_sec_video_thumb} alt="image" />
                        <div class="overly_icon">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={facilityDetails.facility_sec_video_id} onClose={() => setOpen(false)} />
                            <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="jobplacement_partner  text-center">
                        <h3 className='pt-3'>ফ্রিল্যান্স মার্কেটপ্লেস</h3>
                        <p>ফ্রিল্যান্স কাজের জন্য রয়েছে বিভিন্ন মার্কেটপ্লেস। আন্তর্জাতিক এসব মার্কেটপ্লেসের প্রত্যেকটি ভিন্ন ভিন্ন নিয়ম মেনে চললেও কাজের সুবিধা রয়েছে সবখানেই। </p>
                        {loading ? <Spinner className='text-center' animation="grow" variant="danger" /> :
                        <ul>
                            {getFacilities.length > 0 &&
                                getFacilities.slice(0, 11).map(
                                    item=>
                                    <li>
                                        {item.better_featured_image != null ?
                                        <img class="img-fluid" src={item.better_featured_image.source_url} alt={item.alt_text} />
                                        : item.title }
                                    </li>
                                )
                            }
                            
                            {getFacilities.length > 11 &&
                            
                            <li>
                                <Link to="/freelance-market-place">
                                    <p>+<NumberBn number={getFacilities.length - 11} />
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
