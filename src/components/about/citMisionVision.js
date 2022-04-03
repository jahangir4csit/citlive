import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CITMisionVision = (data) =>{
    const statements = data.data;
    return(

    <section id="mission">
            <div class="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey={'tab'+statements[0].cit_state_title.split(" ")[0]}>
                    <Row className="align-items-center">
                        <Col lg={3} md={4}>
                        
                            <div class="mission_menu">

                                <Nav variant="pills" className="flex-column">
                                {statements.map(
                                    statementTab=>(
                                    <Nav.Item>
                                        <Nav.Link eventKey={'tab'+statementTab.cit_state_title.split(" ")[0]}>
                                            {statementTab.cit_state_icon ? 
                                            <img src={statementTab.cit_state_icon} alt="tab icon" />
                                            : ''}
                                             {statementTab.cit_state_title} {console.log(statementTab)}
                                        </Nav.Link>
                                    </Nav.Item>
                                        )
                                    )}
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={9} md={8}>
                            <Tab.Content className="mission_body">
                            {statements.map(
                                    statementContent=>(

                                    <Tab.Pane eventKey={'tab'+statementContent.cit_state_title.split(" ")[0]}>
                                        <Row>
                                            <Col lg={8} sm={12}>
                                                <h3>{statementContent.cit_state_title}</h3>
                                                <p>
                                                    {statementContent.cit_state_desc}
                                                </p>
                                            </Col>
                                            {statementContent.cit_state_details_image ?
                                            <Col lg={4} sm={12}>
                                                <div class="mission_img">
                                                    <img class="img-fluid" src={statementContent.cit_state_details_image} alt="statement image" />
                                                </div>
                                            </Col>
                                            : ''}
                                        </Row>
                                        
                                    </Tab.Pane>
                                    )
                                )}
                                    
                                </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </section>



    )
}
export default CITMisionVision
