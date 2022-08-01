import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Slider from "react-slick";
import {useJobPlacementStats } from '../hooks/useJobPlacementStats'

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

export default function CitInfoSlider(){

  const data = useJobPlacementStats();
  const sectionData = data.allWpSection.nodes[0];

      const settings = {
        className: "story_text_slider",
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: true,
                slidesToShow: 2,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 576,
              settings: {
                // arrows: false,
                slidesToShow: 1
              }
            }
          ]
      };

      return (
        <section id="info"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        data-sal-easing="ease" 
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 d-none d-sm-block">
                        <Slider {...settings}>
                          {sectionData.jobPlacementStats.map( 
                          (item,index) =>(
                            <div key={index}>
                              <div className="counte_item" style={{ backgroundColor: item.color}}>
                                    <h4 style={{ color: item.numberTitleColor ? item.numberTitleColor : '#ED8345' }} dangerouslySetInnerHTML={{ __html: item.number }} />
                                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </div>
                          )
                          )}


                        </Slider>
                    </div>
                </div>
          </div>
        </section>
      );
  }
