import React from "react";

const AboutUsDesc = (data) =>{

    console.log(data, 'achievements about page');

    return(
        <section id="about_top" className="mt-0">
        <div class="container">

            <div class="row">
                <div class="col-lg-7">
                    <div class="facilities_heading  ">
                        <h2>{data.title}</h2>
                        <div className="dtails" dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about_top_img">
                        {data.images.length > 0 ?
                        data.images.map(
                            (photoItem, index)=> 
                            <div class="single_img">
                                <img class="img-fluid" src={photoItem.sourceUrl} alt={photoItem.altText ? photoItem.altText : 'Creative IT Institute'} key={index} />
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