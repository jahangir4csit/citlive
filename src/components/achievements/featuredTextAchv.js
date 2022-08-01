import React from "react";

const FeaturedTextAchv = (data)=>{

    const ftdata = data.ftData;

    return(
        <section id="glory">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="glory_text">
                            <h5 dangerouslySetInnerHTML={{ __html: ftdata.subheading }} />
                            <h2 dangerouslySetInnerHTML={{ __html: ftdata.title }} />
                            <div dangerouslySetInnerHTML={{ __html: ftdata.description }} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="glory_img">
                            <img className="img-fluid" src={ftdata.image.sourceUrl} 
                            alt={ftdata.image.altText ? ftdata.image.altText : 'Creative IT Institute'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTextAchv