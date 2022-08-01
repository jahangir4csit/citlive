import React from "react";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useSuccessCases } from "../hooks/useSuccessCases";
import CaseTabItem from './caseTabItem'

const SuccessStoryGrid = ()=>{

    const cases = useSuccessCases();

    return(
        <section id="success_story"> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="success_tabs">
                            <Tabs defaultActiveKey={cases.allWpSuccessCaseCategory.nodes[0].slug} id="uncontrolled-tab-example" className="success_menu">
                                {cases.allWpSuccessCaseCategory.nodes.map(
                                    (catItem, index)=>(
                                    <Tab eventKey={catItem.slug} title={catItem.name} key={index}>
                                        <CaseTabItem data={catItem.successStory.nodes} />
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

export default SuccessStoryGrid