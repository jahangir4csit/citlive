import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default function FacilityItemDefault(data){
    const facilityDetails = data.itemData;
    if (typeof window === 'undefined') {
        global.window = {}
    }
    //const caseSingle = data.videoData;
    const [isOpen, setOpen] = useState(false)

    return(
        <div className="col-md-6">
            <div className="intarnship support_item" style={{ backgroundColor: facilityDetails.facility_sec_bg}}>
                <h3 dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_title }} />
                <article>
                    <p dangerouslySetInnerHTML={{ __html: facilityDetails.facility_sec_description }} />
                </article>
                {facilityDetails.facility_sec_video_id &&
                <div className="support_item_img">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={facilityDetails.facility_sec_video_id} onClose={() => setOpen(false)} />
                    <img className="img-fluid w-100" src={facilityDetails.facility_sec_video_thumb} alt="image" onClick={()=> setOpen(true)} />
                    <div className="overly_icon">
                        <button className="modalvidwrap"  onClick={()=> setOpen(true)}>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
