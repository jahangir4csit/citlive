import React from "react";

const VirtualTour = (data)=>{
    
    const vtour = data.vData;

    return(
        <section id="virtual">
            <div className="container">
                <div className="virtual">
                    <span dangerouslySetInnerHTML={{ __html: vtour.citVirtualTourIframe }} />
                    <div className="virtual_text">
                        <h6>ভার্চুয়াল ট্যুর</h6>
                        <p>ক্রিয়েটিভ আইটি অফিস</p>
                    </div>
                    {/* <div className="virtual_eye">
                        <a href="#"><StaticImage className="img-fluid" src="../images/Eye-vartual.png" alt="image" /></a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default VirtualTour