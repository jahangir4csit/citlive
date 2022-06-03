import React from "react";
import RecommendsIcon from '../../images/Recommends.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleLogo from '../../images/google_text_icon.png';

const StudentReviewsGrid = (data)=>{

    const fbReviewsCount = data.data.crbThemeOptions.citReviewsFacebook;
    const fbReviews = data.data.crbThemeOptions.crbFacebookReviews;
    const googleReviewsCount = data.data.crbThemeOptions.citReviewsGoogle;
    const googleReviews = data.data.crbThemeOptions.crbGooogleReviews;

    return(
        <section id="student_feedback" className="pt-5">
            <div class="container">

                    {fbReviews.length > 0 &&
                    <div className="row">
                    {fbReviews.map(
                        review=>(
                            <div class="col-6">
                                <div class="feedback_items mb-4">
                                    <iframe src={`https://www.facebook.com/plugins/post.php?href=${review.crb_fb_review_url}&width=500&show_text=true&appId=191181859164389&height=169`} 
                                     style={{border:'none', overflow:'hidden', width: '100%', height: 'auto'}} 
                                    scrolling="no" frameborder="0" allowfullscreen="true" 
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                                    </iframe>
                                </div>
                            </div>
                        )
                    )}
                    </div>
                    }
                {/* <div class="col-12">
                    <div class="recommends text-center">
                        <h4>{fbReviewsCount} <img src={RecommendsIcon} alt="icon" /> <span>Recommends</span></h4>
                    </div>
                </div> */}
                {googleReviews.length > 0 &&
                <div class="col-6">
                    <div class="feedback_item"></div>
                </div>
                }
                <div class="col-12">
                    <div class="excellent text-center">
                        <h4>EXCELLENT
                            <span class="star">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span class="number">{googleReviewsCount}</span>
                            <span class="review">reviews on</span>
                            <img src={googleLogo} alt="icon" />
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StudentReviewsGrid