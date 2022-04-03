import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import GalleryItem from "./galleryItem";


const GalleryGrid = (data)=>{

    const gallary = data.gallaryData;

    return(
        <section id="success_story" className="pt-4" >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="success_tabs">
                            <Tabs defaultActiveKey={gallary[0].title} id="uncontrolled-tab-example" className="success_menu">
                                {gallary.map(
                                    galleryItems=>(
                                    <Tab eventKey={galleryItems.title} title={galleryItems.title}>
                                        <div class="col-12" id={galleryItems.title}>
                                            <div class="row g-4">
                                                {galleryItems.crb_media_gallery.map(
                                                    galleryItem=>(
                                                        <GalleryItem data={galleryItem} />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </Tab>
                                    )
                                )}
                            </Tabs>
                        </div>
                    </div>
                    
                    <div class="col-lg-12 ss_pagination d-none d-md-block">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
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
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GalleryGrid