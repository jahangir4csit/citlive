import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const SuccessStoryDesc = (pagedata)=>{
    return(
        <section id="our_facilities">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar_btn text-center d-md-none">
                            <Link to="/our-courses"><StaticImage src="../../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <FontAwesomeIcon icon={faAngleDown}/> </Link>
                        </div>

                        <div class="facilities_heading all_courses">
                            <h1 dangerouslySetInnerHTML={{ __html: pagedata.data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: pagedata.data.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessStoryDesc