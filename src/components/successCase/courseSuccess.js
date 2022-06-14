import React, { Fragment, useState } from 'react';
import { ModalVidApi } from '../utils/modalApi';
import { Link } from "gatsby";
import Carousel from 'react-bootstrap/Carousel' 


export default function CourseSuccessCase(data){

    const sData = data.sdata;
    console.log(sData, 'sdata');    

    return(
        <Fragment>
        {sData != null &&
        <div class="pg_succsess_story">
            <div class="heading">
                <h4><span>সাকসেস স্টোরি</span> <span><Link to="/success-story">আরও দেখুন</Link></span></h4>
            </div>
            <div className='pg_succsess_img_slider'>
                <Carousel>
                    {sData.map(
                        item=>(

                            item.better_featured_image || item.success_story_link ?
                            <Carousel.Item>
                                <ModalVidApi videoData={item} />
                            </Carousel.Item>
                            
                            : '' 
                        )
                    )}
                    
                </Carousel>
            </div>
        </div>
        }
        </Fragment>
    )
}