import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useInstructors } from "../hooks/useInstructors";
import InstructorHead from './instructorHead'
import Mentor from "./mentor";

export default function InstructorsList(){

    const mentors = useInstructors();

    return(
        <section id="success_story">
            <div className="container">
                <div className="row company_item_wrap">
                    <div className="col-12">
                        <div className="success_tabs">
                            <Tabs defaultActiveKey={mentors.allWpCourseCategory.nodes[0].slug} id="uncontrolled-tab-example" className="success_menu">
                                {mentors.allWpCourseCategory.nodes.map(
                                    (catItem,index)=>(
                                    <Tab eventKey={catItem.slug} title={catItem.name} key={index}>
                                        <div className="col-12" id="graphics">
                                            <div className="row success_body g-4">
                                                {catItem.instructors.nodes.map(
                                                    (instructor,index)=>{

                                                        if('1' == instructor.mentorPosition){
                                                            return <InstructorHead data={instructor} key={index} />
                                                        }
                                                        if('0' == instructor.mentorPosition){
                                                        return <Mentor data={instructor} key={index} />
                                                        }

                                                    }
                                                )}
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