import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CaseItem from "./caseItem";
import { useSuccessCases } from "../hooks/useSuccessCases";


const SuccessStoryGrid = ()=>{

    const cases = useSuccessCases();

    return(
        <section id="success_story">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="success_tabs">
                        <Tabs defaultActiveKey={cases.allWpSuccessCaseCategory.nodes[0].slug} id="uncontrolled-tab-example" className="success_menu">
                            {cases.allWpSuccessCaseCategory.nodes.map(
                                catItem=>(
                                <Tab eventKey={catItem.slug} title={catItem.name}>
                                    <div class="col-12" id="graphics">
                                        <div class="row success_body g-4">
                                            {catItem.successStory.nodes.map(
                                                storyItem=>(
                                                    <CaseItem data={storyItem} />
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

export default SuccessStoryGrid