import React from "react";

export default function InstructorHead(data){
    const head = data.data;

    return(
        <div className="row m-0 instructor_profile align-items-center">
            <div className="col-lg-4">
                {head.featuredImage ?
                <div className="instructor_img">
                    <img className="img-fluid" 
                    src={head.featuredImage.node.sourceUrl} 
                    alt={head.featuredImage.node.altText ? head.featuredImage.node.altText : 'Creative IT Institute'} />
                </div>
                : '' }
            </div>
            <div className="col-lg-8">
                <div className="row instructor_qualification">
                    <div className="col-lg-12">
                        <div className="instructor_profile_heading first_heading">
                            <h2>{head.title}</h2>
                            <p>{head.mentorDsg}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>স্পেশালাইজড এরিয়াঃ</h4>
                            <ol>
                            {head.mentorSpecializations.map(
                                (specilized,index)=>(
                                    specilized.title !== null ?
                                    <li key={index}>{specilized.title}</li>
                                    : ''
                                )
                            )}                   
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>শিক্ষাগত যোগ্যতাঃ</h4>
                            <ol>
                            {head.mentorEducations.map(
                                (education,index)=>(
                                    education.title !== null ?
                                    <li key={index}>{education.title}</li>
                                    : ';'
                                )
                            )}  
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>ওয়ার্ক এক্সপেরিয়েন্স </h4>
                            <ol>
                            {head.mentorWorkexperiences.map(
                                (workexp,index)=>(
                                workexp.title !== null ?
                                <li key={index}>{workexp.title}</li>
                                : ''
                                )
                            )}  
                            </ol>
                        </div>
                    </div>
                </div>
                {head.instructorsWorkplace.mentorWorkplace.length > 0 || head.mentorAchievements.length > 0 ?
                <div className="row instructor_qualification instructor_marketplace">
                    {head.instructorsWorkplace.mentorWorkplace.length > 0 && head.instructorsWorkplace.mentorWorkplace[0].title !== 'Empty'?
                    <div className="col-lg-6 col-md-6">
                        <div className="instructor_profile_inner_item">
                            <h4>ওয়ার্কপ্লেস</h4>
                            <div className="market_icon">
                                {head.instructorsWorkplace.mentorWorkplace.map(
                                    (workplace,index)=>(
                                    workplace.featuredImage ?
                                    <img key={index} className="img-fluid" 
                                    src={workplace.featuredImage.node.sourceUrl} 
                                    alt={workplace.featuredImage.node.altText ? workplace.featuredImage.node.altText : 'Creative IT Institute'} />
                                    : workplace.title.concat('', ', ')
                                    )
                                )} 
                            </div>
                        </div>
                    </div>
                    : ''}
                    {head.mentorAchievements.length > 0 &&
                    <div className="col-lg-6 col-md-6">
                        <div className="instructor_profile_inner_item">
                            <h4>এওয়ার্ড এন্ড এচিভমেন্ট</h4>
                            <div className="market_icon award_icon">
                                {head.mentorAchievements.map(
                                    (mAchv,index)=>(
                                    <img key={index} className="img-fluid" src={mAchv.url} alt="image" />
                                    )
                                )} 
                            </div>
                        </div>
                    </div>
                    }
                </div>
                : ''}

                <div className="row experiance">
                    <div className="col-lg-6 col-8">
                        <div className="instructor_profile_inner_item">
                            <h4>ট্রেইনিং এক্সপেরিয়েন্স</h4>
                            <h5>{head.mentorTrainingExperiences}</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 col-4">
                        <div className="instructor_profile_inner_item">
                            <h4>স্টুডেন্ট</h4>
                            <h5>{head.mentorStudents}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}