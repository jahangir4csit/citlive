import React, {useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import PartnerItem from './partnerItem';
import MembersItem from './membersItem';
import OthersPartner from './othersPartners';

const Partners = (data)=>{
    const partners = data.partnersData;
    return(

        <section id="company">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="company_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'আমরা ৭০০+ কোম্পানি ও সংস্থার সাথে কানেক্টেড' }} />
                        </div>
                    </div>
                    <div class="col-12">
                        <TabContainer id="partners" defaultActiveKey="tab_0">
                            <div className='company_menu'>
                                <Nav variant="tabs" className="dflex" as="ul">
                                    {partners.map(
                                        (partnerNav, index)=>(
                                            <Nav.Item as="li">
                                                <Nav.Link className='company_nav_tab' eventKey={'tab_'+index}>{partnerNav.cit_partners_tab_title}</Nav.Link>
                                            </Nav.Item>
                                        )
                                    )}
                                </Nav>
                            </div>
                            <TabContent class="company_body tab-content">
                                {partners.map(
                                    (partnerItems, index)=>(
                                        <TabPane className='company_item' eventKey={'tab_'+index}>
                                            <PartnerItem partnersinfo={partnerItems.cit_partners_item} />
                                        </TabPane>
                                    )
                                )}
                            </TabContent>
                        </TabContainer>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Partners