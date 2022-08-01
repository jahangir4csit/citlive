import React from "react";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CITMisionVision = (data) =>{
    const statements = data.data;
    return(

    <section id="mission"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-duration="1000"
    data-sal-easing="ease" 
    >
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey={'tab'+statements[0].cit_state_title.split(" ")[0]}>
                    <Row className="align-items-center">
                        <Col lg={3} md={4}>
                        
                            <div className="mission_menu">

                                <Nav variant="pills" className="flex-column">
                                {statements.map(
                                    (statementTab,index)=>(
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={'tab'+statementTab.cit_state_title.split(" ")[0]}>
                                            {statementTab.cit_state_icon ? 
                                            <img src={statementTab.cit_state_icon} alt="tab icon" />
                                            : ''}
                                             {statementTab.cit_state_title}
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
                                    (statementContent,index)=>(

                                    <Tab.Pane key={index} eventKey={'tab'+statementContent.cit_state_title.split(" ")[0]}>
                                        <Row>
                                            <Col lg={8} sm={12}>
                                                <h3 dangerouslySetInnerHTML={{ __html: statementContent.cit_state_title }} />
                                                <p dangerouslySetInnerHTML={{ __html: statementContent.cit_state_desc }} />
                                            </Col>
                                            {statementContent.cit_state_details_image ?
                                            <Col lg={4} sm={12}>
                                                <div className="mission_img">
                                                    <img className="img-fluid" src={statementContent.cit_state_details_image} 
                                                    alt={statementContent.image_alt_text ? statementContent.image_alt_text : 'Creative IT Institute'} />
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
