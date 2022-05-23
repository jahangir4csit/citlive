import React from "react"

const CITAchievements = (data) => {

    const citCertified = data.data;
    
    return(
        <section id="iso">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        {citCertified.photo !==null ? 
                        <div class="iso_image">
                            <img class="img-fluid w-100" src={citCertified.photo.sourceUrl} alt={citCertified.photo.altText ? citCertified.photo.altText : 'CIT|Achievements' }/>
                        </div>
                        : ''}
                    </div>
                    <div class="col-lg-7 offset-lg-1 col-md-6">
                        <div class="iso_text">
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
