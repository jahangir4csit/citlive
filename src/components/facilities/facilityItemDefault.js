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
                <article>
                    <p dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
                </article>
                {facilityDetails.facility_sec_video_id &&
                <div class="support_item_img">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={facilityDetails.facility_sec_video_id} onClose={() => setOpen(false)} />
                    <img class="img-fluid w-100" src={facilityDetails.facility_sec_video_thumb} alt="image" onClick={()=> setOpen(true)} />
                    <div class="overly_icon">
                        <button className="modalvidwrap">
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
