import React from "react";

const PageDesc = (data)=>{
    const pageData = data.data;
    return(
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="facilities_heading ">
                            <h2>{pageData.title}</h2>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageDesc