import React,{useState} from 'react'
import CaseItem from "../successCase/caseItem";

const TopRatedFreelancer = (data)=>{

    //const successStoryHome = useFeaturedCases();
    //const ftStoryItem = successStoryHome.allWpSuccessStories.nodes;

    const [isOpen, setOpen] = useState(false)

     return(
        <section id="student_success" className='section'>
            <div class="container">
                <h2 className='pb-5 font-600' dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : '১৩ বছরের প্রাপ্তি' }} />
                <div class="row">
                    {data.cases.map(
                        storyItem=>(
                            <CaseItem data={storyItem} marginBottom />
                        )
                    )}
                </div>
            </div>
        </section> 
     )
 }

export default TopRatedFreelancer