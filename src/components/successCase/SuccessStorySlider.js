import React, { Fragment } from 'react';
import { ModalVid } from '../utils/modal';
import { Link } from "gatsby";
import Carousel from 'react-bootstrap/Carousel' 


export default function SuccessStorySlider(data){

    const sData = data.sdata;

    return(
        <Fragment>
        {sData != null &&
        <div className="pg_succsess_story">
            <div className="heading">
                <h4>
                    <span>সাকসেস স্টোরি</span> 
                    <span><Link to="/success-story">আরও দেখুন</Link></span>
                </h4>
            </div>
            <div className='pg_succsess_img_slider'>
                <Carousel>
                    {sData.map(
                        (item, index)=>(

                            item.featuredImage || item.successStoryLink ?
                            <Carousel.Item key={index}>
                                <ModalVid videoData={item} />
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