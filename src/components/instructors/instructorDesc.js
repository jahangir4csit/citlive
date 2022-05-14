import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InstructorDesc(data){
    const instructorData = data.data;
    const departs = data.departData;
    console.log(departs, 'depart info');

    return(
        <section id="instructors_teachers">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <div class="navbar_btn text-center d-md-none">
                                <a href="#"><StaticImage src="../../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i class="fa fa-angle-down ps-2"></i></a>
                            </div>
                        <div class="facilities_heading ">
                            <h1>{instructorData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: instructorData.content }} />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_1">
                            <div class="image">
                                <img src={departs.departmentInfo.departmentIcon.sourceUrl} alt="Department" />
                            </div>
                            <div class="text">
                                <h4>{departs.departmentInfo.departmentNumber} <span>{departs.departmentInfo.deptTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_2">
                            <div class="image">
                                <img src={departs.mentorsInfo.mentorsIcon.sourceUrl} alt="Mentors" />
                            </div>
                            <div class="text">
                                <h4>{departs.mentorsInfo.mentorsNumber} <span>{departs.mentorsInfo.mentorsTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_3">
                            <div class="image">
                                <img src={departs.supportInfo.supportsIcon.sourceUrl} alt="247 Support" />
                            </div>
                            <div class="text">
                                <h4>{departs.supportInfo.supportsNumber} <span>{departs.supportInfo.supportTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}