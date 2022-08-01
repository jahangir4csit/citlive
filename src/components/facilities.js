import React from "react";
import { Link } from "gatsby"; 

const Facilities = (data)=>{
    
    const facilityItems = data.facilities;

    return(
        <section id="more_facilities">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease" 
                        >
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'ক্রিয়েটিভ আইটির বিশেষ সেবা' }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
                        </div>
                    </div>

                    {facilityItems.map(
                        (facility, index)=>(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="more_facilities_item more_facilities_item_1" style={{ 'backgroundColor': facility.facilityBoxBg }}
                            data-sal="flip-left"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                {facility.featuredImage !== null ?
                                <img src={facility.featuredImage.node.sourceUrl} alt={facility.featuredImage.node.title} />
                                : ''}
                                <h3 dangerouslySetInnerHTML={{ __html: facility.title }} />
                                <div dangerouslySetInnerHTML={{ __html: facility.content }} />
                            </div>
                        </div>
                        )
                    )}
                    <div className="col-12">
                        <div className="more_facilities_btn text-center">
                            <Link to="/our-facilities"
                            data-sal="flip-up"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >অন্যান্য সুবিধা দেখুন</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Facilities