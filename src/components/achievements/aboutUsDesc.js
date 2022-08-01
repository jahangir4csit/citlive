import React from "react";

const AboutUsDesc = (data) =>{

    return(
        <section id="about_top" className="mt-0">
        <div className="container">

            <div className="row align-items-center">
                <div className="col-lg-12 facilities_heading">
                    <h2>{data.title}</h2>
                </div>
                <div className="col-lg-7 facilities_desc">
                    <div className="dtails" dangerouslySetInnerHTML={{ __html: data.desc }} />
                </div>
                <div className="col-lg-5">
                    <div className="about_top_img">
                        {data.images.length > 0 ?
                        data.images.map(
                            (photoItem, index)=> 
                            <div className="single_img">
                                <img className="img-fluid" src={photoItem.sourceUrl} 
                                alt={photoItem.altText ? photoItem.altText : 'Creative IT Institute'} 
                                key={index} />
                            </div>
                        )
                        : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AboutUsDesc 