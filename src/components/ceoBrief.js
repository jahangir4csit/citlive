import React from "react";
//import { StaticImage } from "gatsby-plugin-image";
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CEObrief = (data)=>{

    const Description = data.desc;
    const ceoImg = data.image;

    return(
        <section id="ceo">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <div className="ceo_StaticImage">
                            {data.image ? 
                            <img className="img-fluid w-100" src={ceoImg[0].sourceUrl} alt={ceoImg[0].altText} />
                            : ''}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ceo_text">
                            <h3>{data.name}</h3>
                            <h4>{data.dsg}</h4>
                            <div dangerouslySetInnerHTML={{ __html: Description }} />
                        </div>
                        {data.smedia.length > 0 &&
                        <div className="follow_on">
                            <h3>ফলোঅন</h3>
                            <ul>
                                {data.smedia.map(
                                    (smedia, index)=>{
                                        switch(smedia.smedia_type.label){
                                            
                                            case "Facebook": return <li key={index}>
                                                <a className="facebook" href={smedia.url}>
                                                    <FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                            case "Instagram": return <li key={index}>
                                            <a className="instagram" href={smedia.url}>
                                                <FontAwesomeIcon icon={faInstagram} /></a>
                                            </li>
                                            case "Linkedin": return <li key={index}>
                                            <a className="linkedin" href={smedia.url}>
                                                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            </li>
                                             case "Twitter": return <li key={index}>
                                             <a className="twitter" href={smedia.url}>
                                                 <FontAwesomeIcon icon={faTwitter} /></a>
                                             </li>
                                              default: return '' 

                                        }
                                    }
                                )
                                }   

                            </ul>
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default CEObrief