import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Mentor(data){
    const mentordata = data.data;
    return(
        
        <div class="col-md-12 col-lg-6">
            <div class="single_instructor">
                <div class="row single_pro_inner_item">
                    <div class="col-12">
                        <div class="single_profile_item">
                            {mentordata.featuredImage ?
                            <div class="single_profile_img">
                                <img class="img-fluid" src={mentordata.featuredImage.node.sourceUrl} alt="image" />
                            </div>
                            : '' }
                            <div class="single_profile_name">
                                <h4>{mentordata.title}</h4>
                                <p>{mentordata.mentorDsg}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>স্পেশালাইজড এরিয়াঃ</h4>
                            <ol>
                                {mentordata.mentorSpecializations.map(
                                    specilized=>(
                                        <li>{specilized.title}</li>
                                    )
                                )}   
                            </ol>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>শিক্ষাগত যোগ্যতাঃ</h4>
                            <ol>
                                {mentordata.mentorEducations.map(
                                    education=>(
                                        <li>{education.title}</li>
                                    )
                                )}  
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row single_pro_inner_item">
                    <div class="col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>ওয়ার্ক এক্সপেরিয়েন্স </h4>
                            <ol>
                                {mentordata.mentorWorkexperiences.map(
                                    workexp=>(
                                    <li>{workexp.title}</li>
                                    )
                                )}  
                            </ol>
                        </div>
                    </div>
                    {mentordata.instructorsWorkplace.mentorWorkplace.length > 0 && mentordata.instructorsWorkplace.mentorWorkplace[0].title !== 'Empty'?
                    <div class="col-lg-6 col-sm-6">
                        <div class="instructor_profile_inner_item">
                            <h4>ওয়ার্কপ্লেস</h4>
                            <div class="market_icon">
                                {mentordata.instructorsWorkplace.mentorWorkplace.map(
                                    workplace=>(
                                    workplace.featuredImage !==null ?
                                    <img class="img-fluid" src={workplace.featuredImage.node.sourceUrl} alt="image" />
                                    : workplace.title.concat('', ', ')
                                    )
                                )} 
                            </div>
                        </div>
                    </div>
                    : ''}
                </div>
                <div class="row">
                    <div class="col-lg-6 col-8">
                        <div class="instructor_profile_inner_item">
                            <h4>ট্রেইনিং এক্সপেরিয়েন্স</h4>
                            <h5>{mentordata.mentorTrainingExperiences}</h5>
                        </div>
                    </div>
                    <div class="col-lg-6 col-4">
                        <div class="instructor_profile_inner_item">
                            <h4>স্টুডেন্ট</h4>
                            <h5>{mentordata.mentorStudents}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}