import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
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

export default function FeedbackSliderOne(data){

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const reviews = data.fbreviews;

    const settings = {
    className: "feedback_1_slider",
    autoplay:true,
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
            {reviews.map(
                review=>(
                    <div>
                        <div class="feedback_item">
                            <iframe src={`https://www.facebook.com/plugins/post.php?href=${review.crb_fb_review_url}&show_text=true&appId=191181859164389`} 
                             style={{border:'none', overflow:'hidden', width: '100%', height: '100vh', paddingRight: '1px'}} 
                            scrolling="no" frameborder="0" allowfullscreen="true" 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                )
            )}
            
        </Slider>
    );
}
