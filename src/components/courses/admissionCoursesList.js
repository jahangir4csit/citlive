import React, { Fragment } from "react";
import CourseSingle from './CourseSingle'
import CourseCatTitle from './courseCatTitle'
import { isEmpty } from "lodash";
import { Link } from "gatsby"


const AdmissionCoursesList = (data)=>{

const courseDataList = data.coursSlide;
const button = data.button ? data.button : null;
const excludeTrmId = 673;
const courseData = courseDataList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });

    return(
        <section id="admission">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: data.secheading }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secdesc }} />
                        </div>
                    </div>

                            {courseData.map(
                                (courseCatitem,index)=>(
                                    <Fragment key={index}>
                                        {isEmpty(courseCatitem.courses.nodes) ? '' : <CourseCatTitle title={courseCatitem.name} /> }
                                        {courseCatitem.courses.nodes.map(
                                            courseItem=>(
                                            <CourseSingle singleItem={courseItem} />
                                                )
                                    )}
                                    </Fragment>
                                )
                            )} 
                    {button != null ?
                    <div className="col-12">
                        <div className="all_course_btn text-center">
                            <Link to="/our-courses">সকল কোর্স দেখুন</Link>
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
        </section>
    )
}
export default AdmissionCoursesList