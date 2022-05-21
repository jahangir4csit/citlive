import React from "react";
import FeedbackHeading from './feedbackHeading'
import FeedbackSliderOne from "./feedbackSliderOne";
import FeedbackSliderTwo from "./feedbackSliderTwo";
import RecommendsIcon from '../../images/Recommends.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleLogo from '../../images/google_text_icon.png';

const StudentFeedback = (data)=>{

    const fbReviewsCount = data.data.crbThemeOptions.citReviewsFacebook;
    const fbReviews = data.data.crbThemeOptions.crbFacebookReviews;
    const googleReviewsCount = data.data.crbThemeOptions.citReviewsGoogle;
    const googleReviews = data.data.crbThemeOptions.crbGooogleReviews;

    return(
        <section id="student_feedback">
            <div class="container">
                <FeedbackHeading 
                secHeading={data.secHeading} 
                secDesc={data.secDesc} />
                <div class="col-12">
                    {fbReviews.length > 0 &&
                    <FeedbackSliderOne fbreviews={fbReviews} />
                    }
                </div>
                <div class="col-12">
                    <div class="recommends text-center">
                        <h4>{fbReviewsCount} <img src={RecommendsIcon} alt="icon" /> <span>Recommends</span></h4>
                    </div>
                </div>
                {googleReviews.length > 0 &&
                <div class="col-12">
                    <FeedbackSliderTwo googlereviews={googleReviews} />
                </div>
                }
                {googleReviews.length > 0 &&
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
                }
            </div>
        </section>
    )
}
export default StudentFeedback
