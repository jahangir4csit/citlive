import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const JpOverview = (data)=>{

    const overviews = data.data;

    return(
        <section id="success_story">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="success_tabs pt-5">
                        <Tabs defaultActiveKey="tab-0" id="uncontrolled-tab-example" className="success_menu">
                            {overviews.map(
                                (overview, index)=>(
                                <Tab eventKey={`tab-${index}`} title={overview.title}>
                                    <div class="col-12">
                                        <div class="row success_body g-4">
                                            <div dangerouslySetInnerHTML={{ __html: overview.overview_desc }} />
                                        </div>
                                    </div>
                                </Tab>
                                )
                            )}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default JpOverview