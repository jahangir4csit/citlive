import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Facilities = (data)=>{
    
    const facilityItems = data.facilities;
    console.log(facilityItems, 'facility');

    return(
        <section id="more_facilities">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'ক্রিয়েটিভ আইটির বিশেষ সেবা' }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
                        </div>
                    </div>

                    {facilityItems.map(
                        facility=>(
                        <div class="col-lg-4 col-md-6">
                            <div class="more_facilities_item more_facilities_item_1" style={{ 'backgroundColor': facility.facilityBoxBg }}>
                                {facility.featuredImage !== null ?
                                <img src={facility.featuredImage.node.sourceUrl} alt={facility.featuredImage.node.title} />
                                : ''}
                                <h3 dangerouslySetInnerHTML={{ __html: facility.title }} />
                                <div dangerouslySetInnerHTML={{ __html: facility.excerpt }} />
                            </div>
                        </div>
                        )
                    )}
                    <div class="col-12">
                        <div class="more_facilities_btn text-center">
                            <a href="#">অন্যান্য সুবিধা দেখুন</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Facilities