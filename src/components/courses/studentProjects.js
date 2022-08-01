import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";

export default function StudentProjects(data){
    const projectsItems = data.projectsData;
    if (typeof window === 'undefined') {
        global.window = {}
    }
    const [isOpen, setOpen] = useState(false);

    const settingsProjectsSlider = {
        className: "pgp_slider",
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        infinite: true,
        speed: 500,
      };

    return(
        <div className="pgs_project">
            <div className="row">
                <h2>আমাদের শিক্ষার্থীদের কিছু প্রোজেক্ট</h2>
                <div className="col-12">
                    <Slider {...settingsProjectsSlider}>
                    {projectsItems.map(
                        (item,index)=> (
                            item.video_id !=null ?
                            <div key={index}>
                                <div className="pgp_slide_item">
                                    <img className="img-fluid w-100" src={item.video_thumb} alt="Projects" />
                                    <div className="overly_icon">
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={item.video_id} onClose={() => setOpen(false)} />
                                        <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                            <FontAwesomeIcon icon={faPlay} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            item.gallery.map(
                                (gitems,index)=>(
                            <div key={index}>
                                <div className="pgp_slide_item">
                                    <img className="img-fluid w-100" src={gitems.sourceUrl} alt={gitems.altText ? gitems.altText : 'Student Project'} />
                                </div>
                            </div>
                            ))
                        )
                    )}

                    </Slider>
                </div>
            </div>
        </div>
    )
}