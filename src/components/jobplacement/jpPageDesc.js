import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

const JpPageDesc = (data)=>{
    const pageData = data.data;

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const [isOpen, setOpen] = useState(false)

    return(
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-7 col-md-7">
                        <div class="facilities_heading ">
                            <h1>{pageData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                        </div>
                        {pageData.jobplacementDescription.jpPageButtonLink &&
                        <div class="more_facilities_btn">
                            <a target={'_blank'} href={pageData.jobplacementDescription.jpPageButtonLink}
                            data-sal="flip-up"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >সিভি পাঠান</a>
                        </div>}
                    </div>
                    <div className="col-5 col-md-5">
                        <div class="job_placement_contant_img">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={pageData.jobplacementDescription.jpPageVideoId} onClose={() => setOpen(false)} />
                            <img class="img-fluid w-100" src={pageData.jobplacementDescription.videoThumb.sourceUrl} 
                            alt={pageData.jobplacementDescription.videoThumb.altText} onClick={()=> setOpen(true)} />
                            <div class="overly_icon">
                                <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default JpPageDesc