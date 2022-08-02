import React,{useState} from 'react'
import redShadow from '../../assets/images/home/red_shadow.png'
import rightGreenShadow from '../../assets/images/home/right_green_shadow.png'
import check from '../../assets/images/home/Check.png'
import Dot1 from '../../assets/images/home/Dot1.png'
import Dot2 from '../../assets/images/home/Dot2.png'
import Dot3 from '../../assets/images/home/Dot3.png'
import Plus from '../../assets/images/home/Plus.png'
import buttonBook from '../../assets/images/home/Button-book.png'
import isoLogo from '../../assets/images/home/iso.png'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { useHomeBanner } from '../hooks/useHomeBanner'


const HomeBanner = ()=>{

    if (typeof window === 'undefined') {
        global.window = {}
    }

    const data = useHomeBanner();
    const banner = data.allWpSection.nodes[0];

    const [isOpen, setOpen] = useState(false);

    return(
    <section id="banner" className='home_banner'>
        <div className="red_shadow">
            <img className="img-fluid" src={redShadow} alt="shadow" />
        </div>
        <div className="green_shadow">
            <img className="img-fluid" src={rightGreenShadow} alt="shadow" />
        </div>

        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="banner_text">
                        <h5
                        data-sal="slide-left"
                        data-sal-delay="200"
                        data-sal-duration="700"
                        data-sal-easing="ease"
                        ><span><img src={check} alt="icon" /></span>
                        {banner.homeBannerData.homeBannerSubTitle}
                        </h5>
                        <img src={Dot1} alt="victor_dot" className="dot_shape_banner" />
                        <h1 dangerouslySetInnerHTML={{ __html: banner.homeBannerData.homeBannerTitle }} 
                        data-sal="zoom-in"
                        data-sal-delay="200"
                        data-sal-duration="700"
                        data-sal-easing="ease"
                        />
                        <p dangerouslySetInnerHTML={{ __html: banner.homeBannerData.bannerShortDesc }} />

                        <a target={'_blank'} href="/our-courses" 
                        className="browse_btn"
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            ব্রাউজ কোর্স
                        </a>
                        <a target={'_blank'} href="/our-courses"  
                        className="d-inline-block d-sm-none"
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            ব্রাউজ কোর্স 
                            <span className="ms-2 angle"><i className="fa fa-angle-down"></i></span>
                        </a>
                        <a target={'_blank'} className="join_btn" href="/register-for-free-seminar/"
                        data-sal="slide-right"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            জয়েন ফ্রি সেমিনার
                        </a>
                        <ul>
                            <li>
                                <img src={isoLogo} alt="logo" />
                                <p>দেশের অন্যতম ISO সার্টিফাইড আইটি <span>ট্রেনিং ইনস্টিটিউট</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner_img">
                        <img 
                        className="img-fluid homebanner-thumb video_thumb" 
                        src={banner.featuredImage.node.sourceUrl} 
                        alt="Home Banner" 
                        data-sal="zoom-in"
                        data-sal-delay="200"
                        data-sal-duration="700"
                        data-sal-easing="ease"
                        loading="lazy"
                        />
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={banner.homeBannerData.videoId} onClose={() => setOpen(false)} />
                        <div className="banner_img_overly" onClick={()=> setOpen(true)}>
                            {banner.homeBannerData.videoId !=null &&
                            <div className="overly_icon">
                                <button className="modalvidwrap" >
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                            }
                            <div className="overly_text">
                                <h4>{banner.homeBannerData.homeBannerSubTitle2}</h4>
                            </div>
                        </div>
                        <div className="plus">
                            <img className="img-fluid" src={Plus} alt="Victor plus" />
                        </div>
                        <div className="dot_2">
                            <img className="img-fluid" src={Dot2} alt="victor dot" />
                        </div>
                        <div className="dot_3">
                            <img className="img-fluid" src={Dot3} alt="victor dot" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    )
}
export default HomeBanner
