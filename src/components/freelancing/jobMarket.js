import React from "react";

const FrJobMarkets = (data) =>{

    const marketPlaces = data.data;

    return(
        <section id="pg_course_overviwe pb-0">
            <div class="container">
                <div class="pg_marketplace2 section_heading2">
                    <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                    <p>বিভিন্ন লোকাল বা রিমোট জবের পাশাপাশি আপনি ফ্রিল্যান্সিং মার্কেটপ্লেস বেছে নিতে পারেন কাজের জন্য।<br/>
                     স্মার্ট স্যালারি আর স্বচ্ছন্দে কাজের সুযোগ থাকায় যেকোনো এক বা একাধিক মার্কেটপ্লেসের অংশ হতে পারেন সহজেই। </p>
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
