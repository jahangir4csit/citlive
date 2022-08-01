import React from "react";

export default function Mentor(data){
    const mentordata = data.data;
    return(
        
        <div className="col-md-12 col-lg-6">
            <div className="single_instructor">
                <div className="row single_pro_inner_item">
                    <div className="col-12">
                        <div className="single_profile_item">
                            {mentordata.featuredImage ?
                            <div className="single_profile_img">
                                <img className="img-fluid" 
                                src={mentordata.featuredImage.node.sourceUrl} 
                                alt={mentordata.featuredImage.node.altText ? mentordata.featuredImage.node.altText : 'Creative IT Institute'} />
                            </div>
                            : '' }
                            <div className="single_profile_name">
                                <h2>{mentordata.title}</h2>
                                <p>{mentordata.mentorDsg}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>স্পেশালাইজড এরিয়াঃ</h4>
                            <ol>
                                {mentordata.mentorSpecializations.map(
                                    (specilized,index)=>(
                                        <li key={index}>{specilized.title}</li>
                                    )
                                )}   
                            </ol>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>শিক্ষাগত যোগ্যতাঃ</h4>
                            <ol>
                                {mentordata.mentorEducations.map(
                                    (education,index)=>(
                                        <li key={index}>{education.title}</li>
                                    )
                                )}  
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row single_pro_inner_item">
                    <div className="col-6">
                        <div className="instructor_profile_inner_item">
                            <h4>ওয়ার্ক এক্সপেরিয়েন্স </h4>
                            <ol>
                                {mentordata.mentorWorkexperiences.map(
                                    (workexp,index)=>(
                                    <li key={index}>{workexp.title}</li>
                                    )
                                )}  
                            </ol>
                        </div>
                    </div>
                    {mentordata.instructorsWorkplace.mentorWorkplace.length > 0 && mentordata.instructorsWorkplace.mentorWorkplace[0].title !== 'Empty'?
                    <div className="col-lg-6 col-sm-6">
                        <div className="instructor_profile_inner_item">
                            <h4>ওয়ার্কপ্লেস</h4>
                            <div className="market_icon">
                                {mentordata.instructorsWorkplace.mentorWorkplace.map(
                                    (workplace,index)=>(
                                    workplace.featuredImage !==null ?
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
                </div>
                <div className="row">
                    <div className="col-lg-6 col-8">
                        <div className="instructor_profile_inner_item">
                            <h4>ট্রেইনিং এক্সপেরিয়েন্স</h4>
                            <h5>{mentordata.mentorTrainingExperiences}</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 col-4">
                        <div className="instructor_profile_inner_item">
                            <h4>স্টুডেন্ট</h4>
                            <h5>{mentordata.mentorStudents}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}