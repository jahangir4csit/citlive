import React from "react";
import Counter from "./utils/counter";


const CITinitiatives = (data) =>{
    const initiativeData = data.data;
    const MarginBottom = data.marginBottom;

    return(
        <section id="counter_up" className={`${data.classes ? data.classes+' about_counter_up ' : 'about_counter_up'}`} style={{ marginBottom: MarginBottom ? '3rem' : '' }}>
            <div className="container">
                <h2>{data.title ? data.title : 'অসাধারণ কিছু অর্জন'}</h2>
                <div className="row">
                    {initiativeData.map(
                        (initiative, index)=>(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
                            <div className="counter_up_item">
                                <h5><span className="counter"><Counter data={initiative.initiv_data} /> </span>+</h5>
                                <p dangerouslySetInnerHTML={{ __html: initiative.initiv_title }} />
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
export default CITinitiatives
