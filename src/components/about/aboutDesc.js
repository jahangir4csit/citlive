import React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import bookIcon from '../../images/Button-book.png';

const AboutDesc = (data) =>{
    const aboutData = data.data;

    return(
        <section id="about_top"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-duration="1000"
        data-sal-easing="ease" 
        >
            <div className="container">
                <div className="navbar_btn text-center d-md-none">
                    <Link to="/our-courses"><img src={bookIcon} alt="icon" />ব্রাউজ কোর্স <FontAwesomeIcon icon={faAngleDown} className="ps-2" /></Link>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="facilities_heading  ">
                            <h1>{aboutData.title}</h1>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: aboutData.content }} />
                        </div>
                    </div>
                    {/* <div class="col-lg-5">
                        <div class="about_top_img">
                            {aboutData.pageSection.aboutLogo !=null ?
                            <div class="single_img">
                                <img class="img-fluid" src={aboutData.pageSection.aboutLogo.aboutLogo.sourceUrl} alt="about" />
                            </div>
                            : ''}
                            {aboutData.pageSection.aboutLogo2 !=null ?
                            <div class="single_img">
                                <img class="img-fluid" src={aboutData.pageSection.aboutLogo.aboutLogo2.sourceUrl} alt="about" />
                            </div>
                            : ''}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default AboutDesc 