import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import React from "react"
import { useFooterMenuQuery } from "../hooks/useMenuFooter"
import { useFooterData } from "../hooks/useFooterData"

const Footer = ()=>{

    const footerNavs = useFooterMenuQuery();
    const footerData = useFooterData();

    return(
        <footer>
            <section id="footer">
                <StaticImage class="footer_left img-fluid" src="../../images/footer-dots.png" alt="image" />
                <StaticImage class="footer_right img-fluid" src="../../images/footer-dots.png" alt="image" />
                <div class="container">
                    <div class="row">
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
                                    <Link 
                                    to={footerData.crbThemeOptions.citFtButton1Url} >
                                    {footerData.crbThemeOptions.citFtButton1Title}</Link>
                                    }
                                    {footerData.crbThemeOptions.citFtButton2Title &&
                                    <Link to={footerData.crbThemeOptions.citFtButton2Url} >{footerData.crbThemeOptions.citFtButton2Title}</Link>
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
                                            navItems=> <li><Link to={navItems.url}>{navItems.label}</Link></li>
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
                                            navItems=> <li><Link to={navItems.url}>{navItems.label}</Link></li>
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
                                            navItems=> <li><Link to={navItems.url}>{navItems.label}</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        }

                        <div class="col-12">
                            <div class="row copy">
                                <div class="col-md-3 col-sm-6 padding_0">
                                    <div class="footer_logo"
                                    data-sal="slide-left"
                                    data-sal-delay="200"
                                    data-sal-duration="800"
                                    data-sal-easing="ease"
                                    >
                                        <StaticImage src="../../images/cit_logo_transparent.png" alt="Creative IT Institute" />
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
                                            <Link to={footerData.crbThemeOptions.citSmediaFb}><FontAwesomeIcon icon={faFacebookF} /></Link>
                                        }
                                        {footerData.crbThemeOptions.citSmediaIn &&
                                            <Link to={footerData.crbThemeOptions.citSmediaIn}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                        }
                                        {footerData.crbThemeOptions.citSmediaTweet &&
                                            <Link to={footerData.crbThemeOptions.citSmediaTweet}><FontAwesomeIcon icon={faYoutube} /></Link>
                                        }
                                        {footerData.crbThemeOptions.citSmediaInsta &&
                                            <Link to={footerData.crbThemeOptions.citSmediaInsta}><FontAwesomeIcon icon={faInstagram} /></Link>
                                        }
                                    </div>
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
