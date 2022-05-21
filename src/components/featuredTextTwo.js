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
                        <div class="glory_text"
                        data-sal="slide-left"
                        data-sal-delay="500"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <h5 dangerouslySetInnerHTML={{ __html: ftTwo.citFeaturedTextSubheading }} />
                            <h2 dangerouslySetInnerHTML={{ __html: ftTwo.title }} />
                            <div dangerouslySetInnerHTML={{ __html: ftTwo.citFeaturedTextDesc }} />
                            <div class="glory_btn"
                            data-sal="flip-right"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                {aboutBtn ? 
                                    ftTwo.featuredTextBtn.map(
                                        btn=>(
                                            <Link 
                                            to={btn.button_url}>{btn.button_title}</Link>
                                        )
                                    )
                                    :<Link 
                                    to="/our-courses">ব্রাউজ কোর্স</Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="glory_img"
                        data-sal="slide-right"
                        data-sal-delay="600"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <img class="img-fluid cit_radius" src={ftTwo.featuredImage.node.sourceUrl} alt={ftTwo.featuredImage.node.altText ? ftTwo.featuredImage.node.altText : 'Creative IT Institute'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTextTwo