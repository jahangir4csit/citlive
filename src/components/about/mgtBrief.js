import React from "react";
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MgtBrief = (data)=>{

    const mgtBrief = data.data;

    return(
        <section id="ceo" className={`${data.classes ? data.classes : ''}`}>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <div className="ceo_StaticImage"
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="1000"
                        data-sal-easing="ease" 
                        >
                            {mgtBrief.photo !==null ? 
                            <img className="img-fluid w-100" src={mgtBrief.photo.sourceUrl} 
                            alt={mgtBrief.photo.altText ? mgtBrief.photo.altText : 'CEO|Creative IT Institute'} />
                            : ''}
                        </div>
                    </div>
                    <div className="col-md-6"
                    data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-duration="1000"
                    data-sal-easing="ease" 
                    >
                        <div className="ceo_text">
                            <h3>{mgtBrief.name}</h3>
                            <h4>{mgtBrief.designation}</h4>
                            <p dangerouslySetInnerHTML={{ __html: mgtBrief.description }} />
                        </div>
                        
                        <div className="follow_on">
                            <h3>ফলোঅন</h3>
                            <ul>
                                {mgtBrief.socialMedia.facebook ?
                                <li><a className="facebook" href={mgtBrief.socialMedia.facebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.instagram ?
                                <li><a className="instagram" href={mgtBrief.socialMedia.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.linkedin ?
                                <li><a className="linkedin" href={mgtBrief.socialMedia.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                : ''}
                                {mgtBrief.socialMedia.twitter ?
                                <li><a className="twitter" href={mgtBrief.socialMedia.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
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