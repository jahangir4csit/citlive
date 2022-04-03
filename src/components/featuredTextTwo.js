import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { useFeaturedTextTwo } from './hooks/useFeaturedTextTwo';
import { Link } from "gatsby"

const FeaturedTextTwo = (data)=>{

    const ftdata = useFeaturedTextTwo();
    const ftTwo = ftdata.allWpSection.nodes[0];
    const aboutBtn = data.aboutBtn ? data.aboutBtn : '';

    return(
        <section id="glory">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="glory_text">
                            <h5 dangerouslySetInnerHTML={{ __html: ftTwo.citFeaturedTextSubheading }} />
                            <h2 dangerouslySetInnerHTML={{ __html: ftTwo.title }} />
                            <div dangerouslySetInnerHTML={{ __html: ftTwo.citFeaturedTextDesc }} />
                            <div class="glory_btn">
                                {aboutBtn ? 
                                    ftTwo.featuredTextBtn.map(
                                        btn=>(
                                            <Link href={btn.button_url}>{btn.button_title}</Link>
                                        )
                                    )
                                    :<Link href="/our-courses">ব্রাউজ কোর্স</Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="glory_img">
                            <img class="img-fluid" src={ftTwo.featuredImage.node.sourceUrl} alt={ftTwo.featuredImage.node.title} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTextTwo