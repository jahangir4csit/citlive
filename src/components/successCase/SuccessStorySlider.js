import React, { useState } from 'react';
import Slider from "react-slick";
import { ModalVid } from '../utils/modal';
import { Link } from "gatsby"; 


export default function SuccessStorySlider(data){

    const sData = data.sdata;
    console.log(sData, 'sd')

    const settingsSuccessSlider = {
        className: "pg_succsess_img_slider",
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:true,
        infinite: true,
        speed: 500,
      };


    return(
        <div class="pg_succsess_story">
            <div class="heading">
                <h4><span>সাকসেস স্টোরি</span> <span><Link to="/success-story">আরও দেখুন</Link></span></h4>
            </div>
            {sData ?
            <Slider {...settingsSuccessSlider}>
            {sData.map(
                item=>(

                    item.featuredImage || item.successStoryLink ?
                    <ModalVid videoData={item} />
                    : '' 
                )
            )}
            </Slider>
            : ''}
        </div>
    )
}