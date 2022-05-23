import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MgtBrief = (data)=>{

    const mgtBrief = data.data;

    return(
        <section id="ceo">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-md-6">
                        <div class="ceo_StaticImage"
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="1000"
                        data-sal-easing="ease" 
                        >
                            {mgtBrief.photo !==null ? 
                            <img class="img-fluid w-100" src={mgtBrief.photo.sourceUrl} alt={mgtBrief.photo.altText ? mgtBrief.photo.altText : 'CEO|Creative IT Institute'} />
                            : ''}
                        </div>
                    </div>
                    <div class="col-md-6"
                    data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-duration="1000"
                    data-sal-easing="ease" 
                    >
                        <div class="ceo_text">
                            <h3>{mgtBrief.name}</h3>
                            <h4>{mgtBrief.designation}</h4>
                            <p dangerouslySetInnerHTML={{ __html: mgtBrief.description }} />
                        </div>
                        
                        <div class="follow_on">
                            <h3>ফলোঅন</h3>
                            <ul>
                                {mgtBrief.socialMedia.facebook ?
                                <li><a class="facebook" href={mgtBrief.socialMedia.facebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.instagram ?
                                <li><a class="instagram" href={mgtBrief.socialMedia.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.linkedin ?
                                <li><a class="linkedin" href={mgtBrief.socialMedia.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.twitter ?
                                <li><a class="twitter" href={mgtBrief.socialMedia.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                                : ''}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default MgtBrief