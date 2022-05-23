import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="nextarrow">
            <FontAwesomeIcon icon={faChevronRight}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="prevarrow">
            <FontAwesomeIcon icon={faChevronLeft}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }

export default class FeedbackSliderOne extends Component {

    render() {
        const settings = {
        className: "feedback_2_slider",
        autoplay:false,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
        };
        return(
            <Slider {...settings}>
                <div>
                    <div class="feedback_item">
                        <div class="student_feedback_item student_feedback_item_1">
                            <ul>
                                <li>
                                    <div class="student_pic">
                                        <StaticImage src="../../images/feedback_1.png" alt="image" />
                                    </div>
                                    <div class="student_name">
                                        <h5>Arif Shibly 
                                        <span class="star">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        </h5>
                                        <h6>Octobar 21, 2020</h6>
                                    </div>
                                </li>
                                <div class="student_social_link">
                                    <StaticImage class="img-fluid" src="../../images/google.png" alt="google" />
                                </div>
                            </ul>
                            <p>Creative IT Institute is one of the most professional institute where a student can learn
                                and earn applying his/her effort........I think its better....</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="feedback_item">
                        <div class="student_feedback_item student_feedback_item_1">
                            <ul>
                                <li>
                                    <div class="student_pic">
                                        <StaticImage src="../../images/feedback_2.png" alt="image" />
                                    </div>
                                    <div class="student_name">
                                        <h5>ফাহাদ বিন্ ফয়েজ 
                                        <span class="star">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        </h5>
                                        <h6>Octobar 21, 2020</h6>
                                    </div>
                                </li>
                                <div class="student_social_link">
                                    <StaticImage class="img-fluid" src="../../images/google.png" alt="google" />
                                </div>
                            </ul>
                            <p>Creative IT Institute is one of the most professional institute where a student can learn
                                and earn applying his/her effort........I think its better....</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="feedback_item">
                        <div class="student_feedback_item student_feedback_item_1">
                            <ul>
                                <li>
                                    <div class="student_pic">
                                        <StaticImage src="../../images/feedback_1.png" alt="image" />
                                    </div>
                                    <div class="student_name">
                                        <h5>Arif Shibly 
                                        <span class="star">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        </h5>
                                        <h6>Octobar 21, 2020</h6>
                                    </div>
                                </li>
                                <div class="student_social_link">
                                    <StaticImage class="img-fluid" src="../../images/google.png" alt="google" />
                                </div>
                            </ul>
                            <p>Creative IT Institute is one of the most professional institute where a student can learn
                                and earn applying his/her effort........I think its better....</p>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}