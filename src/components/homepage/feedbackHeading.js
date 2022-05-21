import React from "react";

const FeedbackHeading = (data)=>{
    return(
        <div class="col-12">
            <div class="section_heading"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease"
            >
                <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'মন্তব্য' }} />
                <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
            </div>
        </div>
    )
}
export default FeedbackHeading