import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InstructorDesc(data){
    const instructorData = data.data;
    const departs = data.departData;

    return(
        <section id="instructors_teachers">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <div className="navbar_btn text-center d-md-none">
                                <a href="#"><StaticImage src="../../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i className="fa fa-angle-down ps-2"></i></a>
                            </div>
                        <div className="facilities_heading ">
                            <h1>{instructorData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: instructorData.content }} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="instructors_item instructors_item_1">
                            <div className="image">
                                <img src={departs.departmentInfo.departmentIcon.sourceUrl} alt="Department" />
                            </div>
                            <div className="text">
                                <h4>{departs.departmentInfo.departmentNumber} <span>{departs.departmentInfo.deptTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="instructors_item instructors_item_2">
                            <div className="image">
                                <img src={departs.mentorsInfo.mentorsIcon.sourceUrl} alt="Mentors" />
                            </div>
                            <div className="text">
                                <h4>{departs.mentorsInfo.mentorsNumber} <span>{departs.mentorsInfo.mentorsTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="instructors_item instructors_item_3">
                            <div className="image">
                                <img src={departs.supportInfo.supportsIcon.sourceUrl} alt="247 Support" />
                            </div>
                            <div className="text">
                                <h4>{departs.supportInfo.supportsNumber} <span>{departs.supportInfo.supportTitle}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}