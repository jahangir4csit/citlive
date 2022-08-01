import React,{useState} from 'react'
import CaseItem from "../successCase/caseItem";

const TopRatedFreelancer = (data)=>{

    //const successStoryHome = useFeaturedCases();
    //const ftStoryItem = successStoryHome.allWpSuccessStories.nodes;

     return(
        <section id="student_success" className='section'>
            <div className="container">
                <h2 className='pb-5 font-600' 
                dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : '১৩ বছরের প্রাপ্তি' }} />
                <div className="row">
                    {data.cases.map(
                        (storyItem,index)=>(
                            <CaseItem data={storyItem} marginBottom key={index} />
                        )
                    )}
                </div>
            </div>
        </section> 
     )
 }

export default TopRatedFreelancer