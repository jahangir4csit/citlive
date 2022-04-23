import React,{useState} from 'react'
import CaseItem from "../successCase/caseItem";

const TopRatedFreelancer = (data)=>{

    //const successStoryHome = useFeaturedCases();
    //const ftStoryItem = successStoryHome.allWpSuccessStories.nodes;

    const [isOpen, setOpen] = useState(false)

     return(
        <section id="student_success" className='section'>
            <div class="container">
                <h2 className='pb-5 font-600' dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'ক্রিয়েটিভ  আইটি এর টপ রেটেড ফ্রিল্যান্সার' }} />
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