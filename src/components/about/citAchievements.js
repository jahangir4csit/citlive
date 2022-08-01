import React from "react"

const CITAchievements = (data) => {

    const citCertified = data.data;
    
    return(
        <section id="iso">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6"
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-duration="1000"
                    data-sal-easing="ease" 
                    >
                        {citCertified.photo !==null ? 
                        <div className="iso_image">
                            <img className="img-fluid w-100" src={citCertified.photo.sourceUrl} alt={citCertified.photo.altText ? citCertified.photo.altText : 'CIT|Achievements' }/>
                        </div>
                        : ''}
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-6"
                    data-sal="slide-down"
                    data-sal-delay="300"
                    data-sal-duration="1000"
                    data-sal-easing="ease" 
                    >
                        <div className="iso_text">
                            <h3 dangerouslySetInnerHTML={{ __html: citCertified.title }} />
                            <p dangerouslySetInnerHTML={{ __html: citCertified.description }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CITAchievements
