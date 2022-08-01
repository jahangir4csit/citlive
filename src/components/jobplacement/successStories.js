import React, { useState, useEffect } from "react"
import CaseItem from "../successCase/caseItem";

export default function JpSuccessStories(data) {
    const stories = data.data;
    const [list, setList] = useState([...stories.slice(0, 4)]);
    const [loadMore, setLoadMore] = useState(false)
    const [hasMore, setHasMore] = useState(stories.length > 4)

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more premises
    useEffect(() => {

        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < stories.length
        const nextResults = isMore
            ? stories.slice(currentLength, currentLength + 4)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }

    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMoreCase = list.length < stories.length
        setHasMore(isMoreCase)

    }, [list]) //eslint-disable-line

    return(
        <section id="success_story" className='section'>
            <div className="container">
                <h2 className='pb-5 font-600' dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'ক্রিয়েটিভ  আইটি এর টপ রেটেড ফ্রিল্যান্সার' }} />
                <div className="row">
                    {list.map(
                        (item, index)=> <CaseItem data={item} key={index} marginBottom />
                    )}
                </div>
                <div className="row">
                <div className="col-12 pt-5 text-center">
                    {hasMore ? 
                        (<div className="all_course_btn text-center">
                            <a onClick={handleLoadMore} to="#"
                            style={{ color: '#fff', cursor: 'pointer'}}>
                            আরো দেখুন</a>
                        </div>) 
                        : (<p>আর নেই</p>) 
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}