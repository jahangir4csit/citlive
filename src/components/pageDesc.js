import React from "react";

const PageDesc = (data)=>{
    const pageData = data.data;
    return(
        <section id="instructors_teachers" className="free_seminer_schedule">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="facilities_heading ">
                            <h1>{pageData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageDesc