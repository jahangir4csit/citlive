import React from "react";

const CoursePageHeading = (pagedata) =>{
    return(
        <section id="our_facilities">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="facilities_heading all_courses">
                            <h1 dangerouslySetInnerHTML={{ __html: pagedata.data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: pagedata.data.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CoursePageHeading