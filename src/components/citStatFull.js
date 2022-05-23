import React from "react";
import LazyLoad from 'react-lazyload';
import Counter from "./utils/counter";


const CITStatFull = (data) =>{
    const initiativeData = data.data;

    return(
        <section id="counter_up" class="about_counter_up">
            <div class="container">
                <h2
                data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="1000"
                data-sal-easing="ease" 
                >অসাধারণ কিছু উদ্যোগ</h2>
                <LazyLoad once>
                    <div class="row">
                        {initiativeData.map(
                            initiative=>(
                            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div class="counter_up_item">
                                    <h5><span class="counter"><Counter data={initiative.initiv_data} /> </span>+</h5>
                                    <p>{initiative.initiv_title}</p>
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </LazyLoad>
            </div>
        </section>
    )
}
export default CITStatFull