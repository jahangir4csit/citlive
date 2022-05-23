import React from "react";
import CaseItem from "../successCase/caseItem";

export default function JpSuccessStories(data) {
    const stories = data.data;

    return(
        <section id="success_story" className='section'>
            <div class="container">
                <h2 className='pb-5 font-600' dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'ক্রিয়েটিভ  আইটি এর টপ রেটেড ফ্রিল্যান্সার' }} />
                <div class="row">
                    {stories.map(
                        (item, index)=> <CaseItem data={item} key={index} marginBottom />
                    )}
                </div>
            </div>
        </section>
    )
}