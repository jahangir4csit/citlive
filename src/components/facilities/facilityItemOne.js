import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons' 

export default function FacilityItemOne(data){

    const facilityDetails = data.itemData;

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)

    return(
        <div className="col-md-12 job_placement">
            <div className="row">
                <div class="col-md-6">
                    <div class="job_placement_contant">
                        <ul>
                            <li><h3 dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_title }} /></li>
                            <li dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_sub_title }} />
                        </ul>
                        <p dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
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
                    <div class="jobplacement_partner">
                        <h3>জবপ্লেসমেন্ট পার্টনার</h3>
                        <ul>
                            <li><img class="img-fluid" src="images/our-facilities/partner-1.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-2.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-3.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-4.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-5.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-6.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-7.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-8.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-9.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-10.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-11.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-12.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-13.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-14.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-15.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-16.png" alt="image" /></li>
                            <li><img class="img-fluid" src="images/our-facilities/partner-17.png" alt="image" /></li>
                            <li>
                                <p>+১১০ <span>প্রতিষ্টান</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



