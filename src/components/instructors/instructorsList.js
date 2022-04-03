import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useInstructors } from "../hooks/useInstructors";
import InstructorHead from './instructorHead'
import Mentor from "./mentor";

export default function InstructorsList(){

    const mentors = useInstructors();
    console.log(mentors, 'Mentors');

    return(
        <section id="success_story">
            <div class="container">
                <div class="row company_item_wrap">
                    <div class="col-12">
                        <div class="success_tabs">
                            <Tabs defaultActiveKey={mentors.allWpCourseCategory.nodes[0].slug} id="uncontrolled-tab-example" className="success_menu">
                                {mentors.allWpCourseCategory.nodes.map(
                                    catItem=>(
                                    <Tab eventKey={catItem.slug} title={catItem.name}>
                                        <div class="col-12" id="graphics">
                                            <div class="row success_body g-4">
                                                {catItem.instructors.nodes.map(
                                                    instructor=>{

                                                        if('1' == instructor.mentorPosition){
                                                            return <InstructorHead data={instructor} />
                                                        }
                                                        if('0' == instructor.mentorPosition){
                                                        return <Mentor data={instructor} />
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