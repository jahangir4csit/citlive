import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default function FacilityItemDefault(data){
    const facilityDetails = data.itemData;
    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;
    const [isOpen, setOpen] = useState(false)

    return(
        <div class="col-md-6">
            <div class="intarnship support_item" style={{ backgroundColor: facilityDetails.facility_sec_bg}}>
                <h3 dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_title }} />
                <article dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
                {facilityDetails.facility_sec_video_id &&
                <div class="support_item_img">
                    <img class="img-fluid w-100" src={facilityDetails.facility_sec_video_thumb} alt="image" />
                    <div class="overly_icon">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={facilityDetails.facility_sec_video_id} onClose={() => setOpen(false)} />
                        <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
