import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import GalleryItem from "./galleryItem";


const GalleryGrid = (data)=>{

    const gallary = data.gallaryData;
    
    const premises = gallary[0].crb_media_gallery;
    const events = gallary[1].crb_media_gallery;
    const farewell = gallary[2].crb_media_gallery;

    // State for the list
    const [list, setList] = useState([...premises.slice(0, 12)]);
    const [list2, setList2] = useState([...events.slice(0, 12)]);
    const [list3, setList3] = useState([...farewell.slice(0, 12)]);
    
    // State to trigger 
    const [loadMore, setLoadMore] = useState(false)
    const [loadMoreEvents, setLoadMoreEvents] = useState(false)
    const [loadMoreFarewell, setLoadMoreFarewell] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(premises.length > 12)
    const [hasMoreEvents, setHasMoreEvents] = useState(events.length > 12)
    const [hasMoreFarewell, setHasMoreFarewell] = useState(farewell.length > 12)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }
    const handleLoadMoreEvents = () => {
        setLoadMoreEvents(true)
    }
    const handleLoadMoreFarewell = () => {
        setLoadMoreFarewell(true)
    }
    

    // Handle loading more premises
    useEffect(() => {

        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < premises.length
        const nextResults = isMore
            ? premises.slice(currentLength, currentLength + 6)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }

    }, [loadMore, hasMore]) //eslint-disable-line

    // Handle loading more events
    useEffect(() => {

        if (loadMoreEvents && hasMoreEvents) {
        const currentLength = list2.length
        const isMoreEvents = currentLength < events.length
        const nextResults = isMoreEvents
            ? events.slice(currentLength, currentLength + 6)
            : []
        setList2([...list2, ...nextResults])
        setLoadMoreEvents(false)
        }
        
    }, [loadMoreEvents, hasMoreEvents]) //eslint-disable-line

    // Handle loading more farewell
    useEffect(() => {

        if (loadMoreFarewell && hasMoreFarewell) {
        const currentLength = list3.length
        const isMoreFarewell = currentLength < farewell.length
        const nextResults = isMoreFarewell
            ? farewell.slice(currentLength, currentLength + 6)
            : []
        setList3([...list3, ...nextResults])
        setLoadMoreFarewell(false)
        }
        
    }, [loadMoreFarewell, hasMoreFarewell]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMorePremises = list.length < premises.length
        setHasMore(isMorePremises)

        const isMoreEvents = list2.length < events.length
        setHasMoreEvents(isMoreEvents)

        const isMoreFarewell = list3.length < farewell.length
        setHasMoreFarewell(isMoreFarewell)

    }, [list,list2,list3]) //eslint-disable-line


    return(
        <section id="success_story" className="pt-4" >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="success_tabs">
                            <Tabs defaultActiveKey={gallary[0].title} id="uncontrolled-tab-example" className="success_menu">
                                {gallary.map(
                                    (galleryItems, index) =>(
                                        0 === index ?
                                        <Tab eventKey={galleryItems.title} title={galleryItems.title}>
                                            <div class="col-12" id={galleryItems.title}>
                                                <div class="row g-4">
                                                    {
                                                    list.map(
                                                        galleryItem=>(
                                                            <GalleryItem data={galleryItem} />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-12 pt-5 text-center">
                                                {hasMore ? 
                                                    (<div class="all_course_btn text-center">
                                                        <a onClick={handleLoadMore} to="#"
                                                        style={{ color: '#fff', cursor: 'pointer'}}>
                                                        Load More</a>
                                                    </div>) 
                                                    : (<p>No more results</p>) 
                                                }
                                            </div>
                                        </Tab> :
                                        (1 === index ? 
                                        <Tab eventKey={index} title={galleryItems.title}>
                                            <div class="col-12" id={galleryItems.title}>
                                                <div class="row g-4">
                                                    {
                                                    list2.map(
                                                        galleryItem=>(
                                                            <GalleryItem data={galleryItem} />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-12 pt-5 text-center">
                                                {hasMoreEvents ? 
                                                    (<div class="all_course_btn text-center">
                                                        <a onClick={handleLoadMoreEvents} to="#"
                                                        style={{ color: '#fff', cursor: 'pointer'}}>
                                                        Load More</a>
                                                    </div>) 
                                                    : (<p>No more results</p>) 
                                                }
                                            </div>
                                        </Tab>
                                        : 
                                        <Tab eventKey={index} title={galleryItems.title}>
                                            <div class="col-12" id={galleryItems.title}>
                                                <div class="row g-4">
                                                    {
                                                    list3.map(
                                                        galleryItem=>(
                                                            <GalleryItem data={galleryItem} />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-12 pt-5 text-center">
                                                {hasMoreFarewell ? 
                                                    (<div class="all_course_btn text-center">
                                                        <a onClick={handleLoadMoreFarewell} to="#"
                                                        style={{ color: '#fff', cursor: 'pointer'}}>
                                                        Load More</a>
                                                    </div>) 
                                                    : (<p>No more results</p>) 
                                                }
                                            </div>
                                        </Tab>
                                    )
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    
                    <div class="col-lg-12 ss_pagination d-none d-md-block">
                        <nav aria-label="Page navigation example">
                            {/* <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-angle-left"></i><FontAwesomeIcon icon={faAngleLeft} /></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">১</a></li>
                                <li class="page-item"><a class="page-link" href="#">২</a></li>
                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                <li class="page-item"><a class="page-link" href="#">৯</a></li>
                                <li class="page-item"><a class="page-link" href="#">১০</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                </li>
                            </ul> */}
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GalleryGrid