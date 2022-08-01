import React, { Fragment } from "react";
import CourseSingle from './CourseSingle'
import CourseCatTitle from './courseCatTitle'
import { isEmpty } from "lodash";
import { Link } from "gatsby"


const AdmissionCourses = (data)=>{

const courseDataList = data.coursSlide;
const button = data.button ? data.button : null;
const excludeTrmId = 673;
const courseData = courseDataList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });

    return(
        <section id="admission">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'সকল কোর্সে ভর্তি চলছে' }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
                        </div>
                    </div>

                    {courseData.slice(0, 3).map(
                        (courseCatitem,index)=>(
                            <Fragment key={index}>
                                {isEmpty(courseCatitem.courses.nodes) ? '' : <CourseCatTitle title={courseCatitem.name} /> }
                                <div className="course_items_display">
                                    <div className="row"

                                    >
                                        {courseCatitem.courses.nodes.slice(0, 3).map(
                                            (courseItem, index)=>(
                                            <CourseSingle singleItem={courseItem} delay={index*=400} key={index} />
                                                )
                                        )}
                                    </div>
                                </div>
                            </Fragment>
                        )
                    )}             
                    {button != null ?
                    <div className="col-12">
                        <div className="all_course_btn text-center">
                            <Link to="/our-courses"
                            data-sal="flip-up"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >সকল কোর্স দেখুন</Link>
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
        </section>
    )
}
export default AdmissionCourses