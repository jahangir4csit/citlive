import React from "react"

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import GalleryTabItem from "./galleryTabs"


const GalleryGrid = (data)=>{

    const gallary = data.gallaryData;

    return(
        <section id="success_story" className="pt-4" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="success_tabs">
                            <Tabs defaultActiveKey={gallary[0].title} id="uncontrolled-tab-example" className="success_menu">
                                {gallary.map(
                                    (galleryItems, index) =>(
                                        <Tab eventKey={galleryItems.title} title={galleryItems.title} key={index}>
                                            <GalleryTabItem data={galleryItems.crb_media_gallery} />
                                        </Tab>
                                    )
                                )}
                            </Tabs>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 ss_pagination d-none d-md-block">
                        <nav aria-label="Page navigation example">
                            {/* <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true"><i className="fa fa-angle-left"></i><FontAwesomeIcon icon={faAngleLeft} /></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">১</a></li>
                                <li className="page-item"><a className="page-link" href="#">২</a></li>
                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">৯</a></li>
                                <li className="page-item"><a className="page-link" href="#">১০</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
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