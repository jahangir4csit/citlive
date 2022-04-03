import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InstructorDesc(data){
    const instructorData = data.data;
    return(
        <section id="instructors_teachers">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <div class="navbar_btn text-center d-md-none">
                                <a href="#"><StaticImage src="../../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i class="fa fa-angle-down ps-2"></i></a>
                            </div>
                        <div class="facilities_heading ">
                            <h2>{instructorData.title}</h2>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: instructorData.content }} />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_1">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-1.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>ডিপার্টমেন্ট</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_2">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-2.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>শিক্ষকবৃন্দ</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_3">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-3.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>২৪/৭ সাপোর্ট মেন্টর</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}