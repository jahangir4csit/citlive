import React from "react";

const FrForWhome = (data) =>{

    const forWhomes = data.data;

    return(
        <section id="pg_course_overviwe pb-0">
            <div className="container">
                <div className="row">
                    <div className="pgc_for_whom">
                <h3>ফ্রিল্যান্সিং যাদের জন্য</h3>
                    <div className="row">
                        {forWhomes.map(
                                    (whome,index)=>(
            
                        <div className="col-4" key={index}>
                            <div className="pgcf_whom_item">
                                <div className="pgcf_whom_item_icon">
                                    {whome.featuredImage !=null && 
                                    <img className="img-fluid" src={whome.featuredImage.node.sourceUrl} alt={whome.title} />
                                    }
                                </div>
                                {whome.title !=null &&
                                <div className="pgcf_whom_item_text">
                                    <p>{whome.title}</p>
                                </div>
                                }
                            </div>
                        </div>
                        
                        )
                        )}
                        
                    </div>
                </div>
                </div>
            </div>
        </section>
    )

}
export default FrForWhome;
