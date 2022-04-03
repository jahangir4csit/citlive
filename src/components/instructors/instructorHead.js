import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InstructorHead(data){
    const head = data.data;
    console.log(head, 'h data');

    return(
        <div class="row m-0 instructor_profile align-items-center">
            <div class="col-lg-4">
                {head.featuredImage ?
                <div class="instructor_img">
                    <img class="img-fluid" src={head.featuredImage.node.sourceUrl} alt="image" />
                </div>
                : '' }
            </div>
            <div class="col-lg-8">
                <div class="row instructor_qualification">
                    <div class="col-lg-12">
                        <div class="instructor_profile_heading first_heading">
                            <h1>{head.title}</h1>
                            <p>{head.mentorDsg}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>স্পেশালাইজড এরিয়াঃ</h4>
                            <ol>
                            {head.mentorSpecializations.map(
                                specilized=>(
                                    specilized.title !== null ?
                                    <li>{specilized.title}</li>
                                    : ''
                                )
                            )}                   
                            </ol>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>শিক্ষাগত যোগ্যতাঃ</h4>
                            <ol>
                            {head.mentorEducations.map(
                                education=>(
                                    education.title !== null ?
                                    <li>{education.title}</li>
                                    : ';'
                                )
                            )}  
                            </ol>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div class="instructor_profile_inner_item">
                            <h4>ওয়ার্ক এক্সপেরিয়েন্স </h4>
                            <ol>
                            {head.mentorWorkexperiences.map(
                                workexp=>(
                                workexp.title !== null ?
                                <li>{workexp.title}</li>
                                : ''
                                )
                            )}  
                            </ol>
                        </div>
                    </div>
                </div>
                {head.instructorsWorkplace.mentorWorkplace.length > 0 || head.mentorAchievements.length > 0 ?
                <div class="row instructor_qualification instructor_marketplace">
                    {head.instructorsWorkplace.mentorWorkplace.length > 0 && head.instructorsWorkplace.mentorWorkplace[0].title !== 'Empty'?
                    <div class="col-lg-6 col-md-6">
                        <div class="instructor_profile_inner_item">
                            <h4>ওয়ার্কপ্লেস</h4>
                            <div class="market_icon">
                                {head.instructorsWorkplace.mentorWorkplace.map(
                                    workplace=>(
                                    workplace.featuredImage ?
                                    <img class="img-fluid" src={workplace.featuredImage.node.sourceUrl} alt="image" />
                                    : workplace.title.concat('', ', ')
                                    )
                                )} 
                            </div>
                        </div>
                    </div>
                    : ''}
                    {head.mentorAchievements.length > 0 &&
                    <div class="col-lg-6 col-md-6">
                        <div class="instructor_profile_inner_item">
                            <h4>এওয়ার্ড এন্ড এচিভমেন্ট</h4>
                            <div class="market_icon award_icon">
                                {head.mentorAchievements.map(
                                    mAchv=>(
                                    <img class="img-fluid" src={mAchv.url} alt="image" />
                                    )
                                )} 
                            </div>
                        </div>
                    </div>
                    }
                </div>
                : ''}

                <div class="row experiance">
                    <div class="col-lg-6 col-8">
                        <div class="instructor_profile_inner_item">
                            <h4>ট্রেইনিং এক্সপেরিয়েন্স</h4>
                            <h5>{head.mentorTrainingExperiences}</h5>
                        </div>
                    </div>
                    <div class="col-lg-6 col-4">
                        <div class="instructor_profile_inner_item">
                            <h4>স্টুডেন্ট</h4>
                            <h5>{head.mentorStudents}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}