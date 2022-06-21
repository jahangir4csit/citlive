import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'

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

export default function MilestoneSlider(data){

  const milestoneData = data.milestoneData;
  console.log(milestoneData, 'milestoneData')

      const settings = {
        className: "milestone_slider",
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
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
                slidesToShow: 1,
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
            <div class="container">
                <div className='section_heading3'>
                  <h2>আমাদের মাইলফলক</h2>
                  <p>দীর্ঘ ১৩ বছর ধরে কর্মসংস্থান সৃষ্টি সহ দেশের সব শ্রেণি-পেশার মানুষকে মানসম্মত তথ্যপ্রযুক্তির প্রশিক্ষণ প্রদানের পাশাপাশি  ৪২ হাজারেরও বেশি মানুষকে সফলভাবে আইটি প্রশিক্ষণ প্রদান করেছে ক্রিয়েটিভ আইটি ইনস্টিটিউট। তারই স্বীকৃতি স্বরূপ প্রতিষ্ঠানের সম্মানিত প্রতিষ্ঠাতা ও সিইও মনির হোসেনের অর্জনের আলোকিত কিছু মুহূর্ত। </p>
                </div>
                <div class="row">
                    <div class="col-12 milestone_slider_bg">
                        <Slider {...settings}>
                          {milestoneData.map( 
                          item =>(
                            <div>
                                <Card className="cit_milestone">
                                    <div class="row g-0 align-items-center">
                                        <div class="col-md-5">
                                            <Card.Img className="img-fluid" variant="top" src={item.milst_image} />
                                        </div>
                                        <div class="col-md-7">
                                            <Card.Body>
                                              <Card.Title dangerouslySetInnerHTML={{ __html: item.milst_title }} />
                                              <Card.Text dangerouslySetInnerHTML={{ __html: item.milst_desc }} />
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card>
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
