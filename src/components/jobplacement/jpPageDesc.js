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
        <section id="instructors_teachers" className="free_seminer_schedule">
            <div className="container">
                <div className="row">
                    <div className="col-7 col-md-7">
                        <div className="facilities_heading ">
                            <h1>{pageData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                        </div>
                        {pageData.jobplacementDescription.jpPageButtonLink &&
                        <div className="more_facilities_btn">
                            <a target={'_blank'} href={pageData.jobplacementDescription.jpPageButtonLink}
                            data-sal="flip-up"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >সিভি পাঠান</a>
                        </div>}
                    </div>
                    <div className="col-5 col-md-5">
                        <div className="job_placement_contant_img">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={pageData.jobplacementDescription.jpPageVideoId} onClose={() => setOpen(false)} />
                            <img className="img-fluid w-100" src={pageData.jobplacementDescription.videoThumb.sourceUrl} 
                            alt={pageData.jobplacementDescription.videoThumb.altText} onClick={()=> setOpen(true)} />
                            <div className="overly_icon">
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