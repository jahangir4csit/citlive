import React,{Fragment} from 'react';
import Seo from "../components/seo";
import { graphql } from "gatsby"; 
import Layout from "../components/layout";
import CourseSingle from '../components/courses/CourseSingle';


export default function Courses(data){

    const courses = data.data.allWpCourse.nodes;
    const secheading = data.pageContext.name;

    return(
        <Layout>
            <Seo title="Our Courses" />
            
            <section id="admission" className='mt-5 pt-5 pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading course_cat_heading mb-5">
                                <h1 dangerouslySetInnerHTML={{ __html: secheading }} />
                            </div>
                        </div>

                            {courses.map(
                                (courseCatitem, index)=>(
                                    <Fragment key={index}>
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
            reviewsCount
          }
        }
      }
  }
`