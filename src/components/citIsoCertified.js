import React from "react"

const CitIsoCertified = (data) => {

    const Description = data.desc;
    
    return(
        <section id="iso" className={`${data.classes ? data.classes : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        {data.image.length > 0 ? 
                        <div className="iso_image">
                            <img className="img-fluid w-100" src={data.image} alt="ISO Certified"/>
                        </div>
                        : ''}
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-6">
                        <div className="iso_text">
                            <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: Description }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CitIsoCertified
