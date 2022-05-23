import React from "react";

const FrJobMarkets = (data) =>{

    const marketPlaces = data.data;

    return(
        <section id="pg_course_overviwe pb-0">
            <div class="container">
                <div class="pg_marketplace2">
                    <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                    <div class="row">
                
                    {marketPlaces.map(
                    jobMarket=>(
                        <div class="col-sm-4">
                            <div class="marketplace_item">
                                <div class="icon">
                                    {jobMarket.featuredImage !=null && 
                                    <img src={jobMarket.featuredImage.node.sourceUrl} alt={jobMarket.title}/>
                                    }
                                </div>
                                {jobMarket.content !=null &&
                                <div class="text">
                                    <div dangerouslySetInnerHTML={{ __html: jobMarket.content }} />
                                </div>
                                }
                            </div>
                        </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )

}
export default FrJobMarkets;
