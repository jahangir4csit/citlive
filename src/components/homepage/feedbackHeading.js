import React from "react";

const FeedbackHeading = (data)=>{
    return(
        <div class="col-12">
            <div class="section_heading">
                <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'মন্তব্য' }} />
                <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
            </div>
        </div>
    )
}
export default FeedbackHeading