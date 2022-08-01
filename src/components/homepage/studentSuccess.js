import React,{useState} from 'react'
//import ModalVideo from 'react-modal-video'
//import { useFeaturedCases } from "../hooks/useSuccessCaseFeatured";
import CaseItem from "../successCase/caseItem";
import { Link } from "gatsby"

const StudentSuccess = (data)=>{

    //const successStoryHome = useFeaturedCases();
    //const ftStoryItem = successStoryHome.allWpSuccessStories.nodes;

     return(
        <section id="student_success">
            <div className="container">
                <div className="row">
                    <div className="col-12"
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-duration="800"
                    data-sal-easing="ease" 
                    >
                        <div className="section_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'সফলতার গল্প' }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
                        </div>
                    </div>
                    {data.cases.map(
                        (storyItem,index)=>(
                            <CaseItem data={storyItem} key={index} />
                        )
                    )}
                    <div className="col-12">
                        <div className="more_facilities_btn text-center">
                            <Link to="/success-story"
                            data-sal="flip-up"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >আরো দেখুন</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
     )
 }

export default StudentSuccess