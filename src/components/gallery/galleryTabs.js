import React, { useState, useEffect, Fragment } from "react"
import GalleryItem from "./galleryItem";

export default function GalleryTabItem(data){

    const galleryTabData = data.data;

    const [list, setList] = useState([...galleryTabData.slice(0, 6)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(galleryTabData.length > 6);

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more premises
    useEffect(() => {

        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < galleryTabData.length
        const nextResults = isMore
            ? galleryTabData.slice(currentLength, currentLength + 4)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }

    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMoreGallery = list.length < galleryTabData.length
        setHasMore(isMoreGallery)

    }, [list]) //eslint-disable-line


    return(
        <Fragment>
            <div className="col-12">
                <div className="row g-4">
                    {
                    list.map(
                        (galleryItem, index)=>(
                            <GalleryItem data={galleryItem} key={index} />
                        )
                    )}
                </div>
            </div>
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
        </Fragment>
    )
}
