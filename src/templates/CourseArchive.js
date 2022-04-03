import React,{Fragment, useEffect, useState} from 'react'
import Seo from "../components/seo"
import Slider from "react-slick";
import { graphql, Link } from "gatsby"; 
import { StaticImage } from "gatsby-plugin-image"
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../components/layout"
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { isEmpty } from "lodash";
import CourseSingle from '../components/courses/CourseSingle'
import CourseCatTitle from '../components/courses/courseCatTitle'

export default function Courses(data){

    const courses = data.data.allWpCourse.nodes;
    const secheading = data.pageContext.name;

    return(
        <Layout>
            <Seo title="Our Courses" />
            
            <section id="admission" className='mt-5 pt-5 pb-5'>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section_heading mb-5">
                                <h2 dangerouslySetInnerHTML={{ __html: secheading }} />
                            </div>
                        </div>

                            {courses.map(
                                courseCatitem=>(
                                    <Fragment>
                                        {/* {isEmpty(courseCatitem.courses.nodes) ? '' : <CourseCatTitle title={courseCatitem.name} /> } */}
                                        <CourseSingle archive singleItem={courseCatitem} />
                                    </Fragment>
                                )
                            )} 
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    allWpCourse(filter: {courseCategories: {nodes: {elemMatch: {id: {eq: $id }}}}}) {
        nodes {
          title
          slug
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          course_options {
            studentsIn
            courseFee
            discountFee
          }
        }
      }
  }
`