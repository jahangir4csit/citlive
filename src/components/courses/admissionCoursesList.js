import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image"
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
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: data.secheading }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secdesc }} />
                        </div>
                    </div>

                            {courseData.map(
                                courseCatitem=>(
                                    <Fragment>
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
                    <div class="col-12">
                        <div class="all_course_btn text-center">
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