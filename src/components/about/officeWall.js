import React, { useState } from 'react';
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="nextarrow" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight}
                style={{ ...style, fontSize: "14px", display: "inline" }}
            />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="prevarrow" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft}
                style={{ ...style, fontSize: "14px", display: "inline" }}
            />
        </div>
    );
  }

export default function OfficeWall(data){

    const photogallery = data.data;

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settingsOfficeWallThumb = {

        className: "row office_and_traning_slider_for",
        autoplay:true,
        slidesToShow:5,
        slidesToScroll:1,
        focusOnSelect:true,
        arrows:true,
        dots:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 3
                }
              }
        ]
      };

    const settingsOfficeWall = {
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:false,
        className: "row office_and_traning_slider",
    };

    return(
        <section id="office_and_traning">
            <div class="container">
                <h2>অফিস এবং প্রশিক্ষণের স্থান</h2>


                <Slider 
                {...settingsOfficeWall} 
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                >
                    {photogallery.map(
                        photo=>(
                    <div class="col">
                        <div class="office_slide_item">
                            <img class="img-fluid w-100" src={photo.sourceUrl} alt={photo.altText ? photo.altText : 'Creative IT Institute'} />
                        </div>
                    </div>
                        )
                    )}
                    
                </Slider>

                <Slider {...settingsOfficeWallThumb}                                 
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={9}
                    slidesToScroll= {1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    >
                    {photogallery.map(
                        photothumb=>(
                    <div class="traning_slider_item">
                        <img class="img-fluid w-100" src={photothumb.sourceUrl} alt={photothumb.altText ? photothumb.altText : 'Creative IT Institute'} />
                    </div>
                        )
                    )}
                    
                </Slider>
            </div>
        </section>
    )
}