import React from "react";

export default function CourseCatTitle(data){
    const title = data.title
    return(
        <div className="col-12">
            <div className="course_heading">
                <h3>{title}</h3>
            </div>
        </div>
    )
}