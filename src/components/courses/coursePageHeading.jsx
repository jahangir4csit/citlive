import React from "react";

const CoursePageHeading = (pagedata) =>{
    return(
        <section id="our_facilities">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="facilities_heading all_courses">
                            <h2 dangerouslySetInnerHTML={{ __html: pagedata.data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: pagedata.data.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CoursePageHeading