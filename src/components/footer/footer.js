import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from "react"
import { useFooterMenuQuery } from "../hooks/useMenuFooter"
import { useFooterData } from "../hooks/useFooterData"
import ftLogo from '../../images/cit_logo.png';
import ftDots from '../../images/footer-dots.png';

import ftBkashLogo from '../../images/bkash_marchant.png';
import ftNagadLogo from '../../images/nagad_marchant.png';
import ftRoketLogo from '../../images/roket_marchant.png';

const Footer = ()=>{

    const footerNavs = useFooterMenuQuery();
    const footerData = useFooterData();

    return(
        <footer>
            <section id="footer">
                <img class="footer_left img-fluid" src={ftDots} alt="CIT" />
                <img class="footer_right img-fluid" src={ftDots} alt="Creative IT" />
                <div class="container">
                    <div class="row footer-top">
                        <div class="col-12">
                            <div class="footer_heading"
                            data-sal="zoom-in"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <h2 dangerouslySetInnerHTML={{ __html: footerData.crbThemeOptions.citFtHeading ? footerData.crbThemeOptions.citFtHeading : '' }} />
                                <p dangerouslySetInnerHTML={{ __html: footerData.crbThemeOptions.citFtDesc ? footerData.crbThemeOptions.citFtDesc : '' }} />
                                <div class="footer_btn">
                                    {footerData.crbThemeOptions.citFtButton1Title &&
                                    <a target={'_blank'} 
                                    href={footerData.crbThemeOptions.citFtButton1Url} >
                                    {footerData.crbThemeOptions.citFtButton1Title}</a>
                                    }
                                    {footerData.crbThemeOptions.citFtButton2Title &&
                                    <a target={'_blank'} href={footerData.crbThemeOptions.citFtButton2Url} >{footerData.crbThemeOptions.citFtButton2Title}</a>
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6"
                        data-sal="slide-left"
                        data-sal-delay="200"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <div class=" footer_item_1">
                                <h5>যোগাযোগ</h5>
                                <ul>
                                    {footerData.crbThemeOptions.citFtAddress &&
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div class="footer_text" dangerouslySetInnerHTML={{ __html: footerData.crbThemeOptions.citFtAddress }} />
                                    </li>
                                    }
                                    {footerData.crbThemeOptions.citFtContactPhone &&
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </div>
                                        <div class="footer_text" 
                                        dangerouslySetInnerHTML={{ __html: footerData.crbThemeOptions.citFtContactPhone }} 
                                        />
                                    </li>
                                    }
                                    {footerData.crbThemeOptions.citFtContactEmail &&
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        </div>
                                        <div class="footer_text">
                                            <span><a href={'mailto:'+footerData.crbThemeOptions.citFtContactEmail} >{footerData.crbThemeOptions.citFtContactEmail}</a></span>
                                        </div>
                                    </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        {footerNavs[0] &&
                        <div class="col-md-3 col-sm-6"
                            data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <div class="footer_item footer_item_2">
                                    <h5>{ footerNavs[0].name }</h5>
                                    <ul>
                                        {footerNavs[0].menuItems.nodes.map(
                                            navItems=> <li><a target={'_blank'} href={navItems.url}>{navItems.label}</a></li>
                                        )}
                                    </ul>
                                </div>
                                
                            </div>
                        }
                        {footerNavs[1] &&
                            <div class="col-md-3 col-sm-6"
                            data-sal="slide-left"
                            data-sal-delay="400"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <div class="footer_item footer_item_2">
                                    <h5>{ footerNavs[1].name }</h5>
                                    <ul>
                                        {footerNavs[1].menuItems.nodes.map(
                                            navItems=> <li><a target={'_blank'} href={navItems.url}>{navItems.label}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        }
                        {footerNavs[2] &&
                            <div class="col-md-2 col-sm-6"
                            data-sal="slide-left"
                            data-sal-delay="500"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <div class="footer_item footer_item_2">
                                    <h5>{ footerNavs[2].name }</h5>
                                    <ul>
                                        {footerNavs[2].menuItems.nodes.map(
                                            navItems=> <li><a target={'_blank'} href={navItems.url}>{navItems.label}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='container'>
                        <div className='row justify-content-center payments'>
                            <div className='col-12 payment_heading text-center'>
                                <h3>যে সকল মার্চেন্ট নাম্বার এর মাধ্যমে আমরা পেমেন্ট গ্রহন করি</h3>
                            </div>
                            <div className='col-12 col-md-9'>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-4'>
                                        <div className='payment_item align-items-center text-center'>
                                            <div className='payment_logo mx-auto'>
                                                <img className='img-fluid' src={ftBkashLogo} alt='bkash'/>
                                            </div>
                                            <div className='payment_qr mx-auto'>
                                                <small>01990779766</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4'>
                                        <div className='payment_item align-items-center text-center'>
                                            <div className='payment_logo mx-auto'>
                                                <img className='img-fluid' src={ftNagadLogo} alt='Nagad'/>
                                            </div>
                                            <div className='payment_qr mx-auto'>
                                                <small>01309014614</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4'>
                                        <div className='payment_item align-items-center text-center'>
                                            <div className='payment_logo mx-auto'>
                                                <img className='img-fluid' src={ftRoketLogo} alt='Rocket'/>
                                            </div>
                                            <div className='payment_qr mx-auto'>
                                                <small className='pl-0'>013090146143</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row copy">
                            <div class="col-md-3 col-sm-6 padding_0">
                                <div class="footer_logo"
                                data-sal="slide-left"
                                data-sal-delay="200"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                >
                                    <img src={ftLogo} alt="Creative IT Institute" />

                                </div> 
                            </div>
                            <div class="col-md-6 copy_text_sm_last"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <div class="copy_text">
                                    <p dangerouslySetInnerHTML={{ __html: footerData.crbThemeOptions.citCopyrightText ? 'Copyright &copy; '+ footerData.crbThemeOptions.citCopyrightText + `. All right reserved | <a href="/sitemap">Sitemap</a>` : 'Creative IT Institute' }} />
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="copy_social_link"
                                data-sal="slide-right"
                                data-sal-delay="300"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                >
                                    {footerData.crbThemeOptions.citSmediaFb &&
                                        <a target="_blank" href={footerData.crbThemeOptions.citSmediaFb}><FontAwesomeIcon icon={faFacebookF} /></a>
                                    }
                                    {footerData.crbThemeOptions.citSmediaIn &&
                                        <a target="_blank" href={footerData.crbThemeOptions.citSmediaIn}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    }
                                    {footerData.crbThemeOptions.citSmediaTweet &&
                                        <a target="_blank" href={footerData.crbThemeOptions.citSmediaTweet}><FontAwesomeIcon icon={faYoutube} /></a>
                                    }
                                    {footerData.crbThemeOptions.citSmediaInsta &&
                                        <a target="_blank" href={footerData.crbThemeOptions.citSmediaInsta}><FontAwesomeIcon icon={faInstagram} /></a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer
