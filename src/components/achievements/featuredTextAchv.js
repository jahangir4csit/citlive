import React from "react";

const FeaturedTextAchv = (data)=>{

    const ftdata = data.ftData;

    return(
        <section id="glory">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="glory_text">
                            <h5 dangerouslySetInnerHTML={{ __html: ftdata.subheading }} />
                            <h2 dangerouslySetInnerHTML={{ __html: ftdata.title }} />
                            <div dangerouslySetInnerHTML={{ __html: ftdata.description }} />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="glory_img">
                            <img class="img-fluid" src={ftdata.image.sourceUrl} alt={ftdata.image.altText ? ftdata.image.altText : 'Creative IT Institute'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTextAchv