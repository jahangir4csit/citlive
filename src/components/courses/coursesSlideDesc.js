import React from "react";

const CourseSlideDesc = (data)=>{
    return(
        <div class="col-12"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease"
        >
            <div class="section_heading">
                <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'জনপ্রিয় কোর্সসমূহ' }} />
                <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
            </div>
        </div>
    )
}
export default CourseSlideDesc