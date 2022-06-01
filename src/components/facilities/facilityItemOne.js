import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import NumberBn from '../utils/numberBn'


export default function FacilityItemOne(data){

    const facilityDetails = data.itemData;

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)

    return(
        <div className="col-md-12 job_placement" style={{ backgroundColor: facilityDetails.facility_sec_bg}}>
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
                        <h3>ক্যারিয়ার প্লেসমেন্ট পার্টনার</h3>
                        <ul>
                            {facilityDetails.cit_facelity_jp_items.length > 0 &&
                                facilityDetails.cit_facelity_jp_items.slice(0, 18).map(
                                    item=>
                                    <li>
                                        {item.featuredImage != null ?
                                        <img class="img-fluid" src={item.featuredImage.node.sourceUrl} alt={item.title} />
                                        : item.title }
                                    </li>
                                )
                            }
                            
                            {/* {facilityDetails.cit_facelity_jp_items.length > 17 &&
                            
                            <li>
                                <p>+<NumberBn number={facilityDetails.cit_facelity_jp_items.length - 17} />
                                 <span>প্রতিষ্টান</span></p>
                            </li>
                            } */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



