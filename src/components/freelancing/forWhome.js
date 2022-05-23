import React from "react";

const FrForWhome = (data) =>{

    const forWhomes = data.data;

    return(
        <section id="pg_course_overviwe pb-0">
            <div class="container">
                <div class="row">
                    <div class="pgc_for_whom">
                <h3>এই কোর্স যাদের জন্য</h3>
                    <div class="row">
                        {forWhomes.map(
                                    whome=>(
            
                        <div class="col-4">
                            <div class="pgcf_whom_item">
                                <div class="pgcf_whom_item_icon">
                                    {whome.featuredImage !=null && 
                                    <img class="img-fluid" src={whome.featuredImage.node.sourceUrl} alt={whome.title} />
                                    }
                                </div>
                                {whome.title !=null &&
                                <div class="pgcf_whom_item_text">
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
