import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import FaqItem from "./faqItem";


const FaqGrid = (data)=>{

    const faqs = data.faqsData;

    return(
        <section id="success_story" className="pt-4" >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="success_tabs">
                            <Tabs defaultActiveKey={faqs[0].title} id="uncontrolled-tab-example" className="success_menu">
                                {faqs.map(
                                    faqItems=>(
                                    <Tab eventKey={faqItems.title} title={faqItems.title}>
                                        <div class="col-12" id={faqItems.title}>
                                            <div class="row g-4">
                                                
                                                <div class="col-md-12">
                                                    <Accordion defaultActiveKey={0} className="row">
                                                            
                                                        {faqItems.faqs_item.map(
                                                            (faqItem, index)=>(
                                                            <div className="col-md-6">
                                                                <Accordion.Item eventKey={index}>
                                                                    <Accordion.Header>{faqItem.title}</Accordion.Header>
                                                                    <Accordion.Body>
                                                                    {faqItem.crb_faq_ans}
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </div>
                                                            )
                                                        )}
                                                    </Accordion>
                                                </div>
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

export default FaqGrid