import React from "react";
import { useFeaturedText } from '../hooks/useFeaturedTextOne';
import practicalDot from '../../images/prectical-dot.png';

const FeaturedTextOne = ()=>{

    const data = useFeaturedText();
    const ftOne = data.allWpSection.nodes[0];


    return(
        <section id="practical_project">
        <div className="container practical_project">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="practical_project_img"
                    data-sal="slide-down"
                    data-sal-delay="500"
                    data-sal-duration="900"
                    data-sal-easing="ease"
                    >
                        <img className="img-fluid w-100" 
                        src={ftOne.featuredImage.node.sourceUrl} 
                        alt={ftOne.featuredImage.node.altText ? ftOne.featuredImage.node.altText : 'Creative IT Institute'} />
                        <div className="prectical_dots">
                            <img src={practicalDot} alt="victor-dots" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-6">
                    <div className="practical_project_text"
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-duration="800"
                    data-sal-easing="ease"
                    >
                        <h2 dangerouslySetInnerHTML={{ __html: ftOne.title }} />
                        <div dangerouslySetInnerHTML={{ __html: ftOne.citFeaturedTextDesc }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default FeaturedTextOne
