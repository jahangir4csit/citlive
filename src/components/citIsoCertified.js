import React from "react"

const CitIsoCertified = (data) => {

    const description = data.desc;
    
    return(
        <section id="iso">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        {data.image.length > 0 ? 
                        <div class="iso_image">
                            <img class="img-fluid w-100" src={data.image} alt="ISO Certified"/>
                        </div>
                        : ''}
                    </div>
                    <div class="col-lg-7 offset-lg-1 col-md-6">
                        <div class="iso_text">
                            <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CitIsoCertified
