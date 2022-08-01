import React from "react";
import Accordion from 'react-bootstrap/Accordion'



const FaqGrid = (data)=>{

    const faqs = data.faqsData;

    return(
        <section id="success_story" className="pt-4" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="success_tabs pt-4">
                            {/* <Tabs defaultActiveKey={faqs[0].title} id="uncontrolled-tab-example" className="success_menu"> */}
                                {faqs.map(
                                    (faqItems,index)=>( 
                                    // <Tab eventKey={faqItems.title} title={faqItems.title} >
                                        <div className="col-12" id={faqItems.title} key={index}>
                                            <div className="row g-4">
                                                
                                                <div className="col-md-12">
                                                    <Accordion defaultActiveKey={0} className="row">
                                                            
                                                        {faqItems.faqs_item.map(
                                                            (faqItem, index)=>(
                                                            <div className="col-md-6 faq-item">
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
                                    // </Tab>
                                    )
                                )}
                            {/* </Tabs> */}
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-12 ss_pagination d-none d-md-block">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
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
                            </ul>
                        </nav>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default FaqGrid