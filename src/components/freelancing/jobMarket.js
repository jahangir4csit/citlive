import React from "react";

const FrJobMarkets = (data) =>{

    const marketPlaces = data.data;

    return(
        <section id="pg_course_overviwe pb-0">
            <div className="container">
                <div className="pg_marketplace2 section_heading2">
                    <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                    <p>বিভিন্ন লোকাল বা রিমোট জবের পাশাপাশি আপনি ফ্রিল্যান্সিং মার্কেটপ্লেস বেছে নিতে পারেন কাজের জন্য।<br/>
                     স্মার্ট স্যালারি আর স্বচ্ছন্দে কাজের সুযোগ থাকায় যেকোনো এক বা একাধিক মার্কেটপ্লেসের অংশ হতে পারেন সহজেই। </p>
                    <div className="row">
                
                    {marketPlaces.map(
                    (jobMarket,index)=>(
                        <div className="col-sm-2" key={index}>
                            <div className="marketplace_item">
                                <div className="icon">
                                    {jobMarket.featuredImage !=null && 
                                    <img src={jobMarket.featuredImage.node.sourceUrl} alt={jobMarket.title}/>
                                    }
                                </div>
                                {/* {jobMarket.content !=null &&
                                <div className="text">
                                    <div dangerouslySetInnerHTML={{ __html: jobMarket.content }} />
                                </div>
                                } */}
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
