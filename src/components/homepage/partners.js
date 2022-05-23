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
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'আমরা ৭০০+ কোম্পানি ও সংস্থার সাথে কানেক্টেড' }} 
                            data-sal="slide-left"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            />
                        </div>
                    </div>
                    <div class="col-12"
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-duration="900"
                    data-sal-easing="ease"
                    >
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
                                            {partnerItems.partner_logo.length > 0 &&
                                                <PartnerItem partnersinfo={partnerItems.partner_logo} />
                                            }
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