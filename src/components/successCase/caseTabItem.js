import React, { useState, useEffect, Fragment } from "react"
import CaseItem from "./caseItem";

export default function CaseTabItem(data){

    const caseTabData = data.data;
    console.log(caseTabData, 'case Tabs');

    const [list, setList] = useState([...caseTabData.slice(0, 6)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(caseTabData.length > 6);

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more premises
    useEffect(() => {

        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < caseTabData.length
        const nextResults = isMore
            ? caseTabData.slice(currentLength, currentLength + 4)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }

    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMoreCases = list.length < caseTabData.length
        setHasMore(isMoreCases)

    }, [list]) //eslint-disable-line


    return(
        <Fragment>
            <div class="col-12" id="graphics">
                <div class="row success_body g-4">
                    {list.map(
                        (storyItem, index) =>(
                            <CaseItem data={storyItem} key={index} />
                        )
                    )}
                </div>
            </div>
            <div class="col-12 pt-5 text-center">
                {hasMore ? 
                    (<div class="all_course_btn text-center">
                        <a onClick={handleLoadMore} to="#"
                        style={{ color: '#fff', cursor: 'pointer'}}>
                        আরো দেখুন</a>
                    </div>) 
                    : (<p>আর নেই</p>) 
                }
            </div>
        </Fragment>
    )
}

