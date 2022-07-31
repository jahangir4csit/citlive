import React from "react";

const JpOverview = (data)=>{

    const overviews = data.data;

    return(
        <section id="jp_overview" className="mb-5 mt-5">
            <div class="container">
                {overviews.map(
                (overview, index)=>(
                    <div className={`row py-3 mb-4 align-items-center ovr_item_${index}`}>
                        <div className="col-md-8">
                            <div className="jp_overview_content_wrap p-5 cit_radius">
                                <h3 className="pb-3 font-600" dangerouslySetInnerHTML={{  __html: overview.title }} />
                                <article dangerouslySetInnerHTML={{ __html: overview.overview_desc }} />
                            </div>
                        </div>
                        {overview.overview_img &&
                        <div className="col-md-4">
                            <img className={`img-fluid overview_img img-circle ovr_img_${index}`} 
                            src={overview.overview_img} alt="" />
                        </div>}
                    </div>
                    )
                )}
            </div>
        </section>
    )
}

export default JpOverview