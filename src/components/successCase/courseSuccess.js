import React, { Fragment } from 'react';
import { ModalVidApi } from '../utils/modalApi';
import { Link } from "gatsby";
import Carousel from 'react-bootstrap/Carousel' 


export default function CourseSuccessCase(data){

    const sData = data.sdata;  

    return(
        <Fragment>
        {(sData != null && sData.length > 0) &&
        <div className="pg_succsess_story">
            <div className="heading">
                <h4><span>সাকসেস স্টোরি</span> <span><Link to="/success-story">আরও দেখুন</Link></span></h4>
            </div>
            <div className='pg_succsess_img_slider'>
                <Carousel>
                    {sData.map(
                        (item,index)=>(

                            item.better_featured_image || item.success_story_link ?
                            <Carousel.Item key={index}>
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
