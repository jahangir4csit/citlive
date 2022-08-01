import { graphql, Link } from "gatsby"
import React,{useState} from 'react'
import Seo from "../components/seo"
import Layout from "../components/layout"
import CourseSlide from "../components/courses/CoursesSlide"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import BookButton from '../images/Button-book.png';
import SeminarItem from '../components/seminar/seminarItem'

export default function FreeSeminar({data}){

    if (typeof window === 'undefined') {
      global.window = {}
    }

    const currentDate = new Date();
    const page = data.allWpPage.nodes[0];
    const courseData = data.allWpCourseCategory.nodes;
    const seminarData = data.allWpSeminar.nodes;

    const seo = page.pageMeta;
    const [isOpen, setOpen] = useState(false);

    //console.log(currentDate, 'c date');
    
    return(
        <React.Fragment>
        <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <section id="instructors_teachers" className="free_seminer_schedule">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar_btn text-center d-md-none">
                            <Link href="/our-courses">
                              <img src={BookButton} alt="book icon" />ব্রাউজ কোর্স 
                              <i className="fa fa-angle-down ps-2"></i>
                            </Link>
                        </div>

                        <div className="facilities_heading ">
                          <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
                          <div dangerouslySetInnerHTML={{ __html: page.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="seminar">
            <div className="container seminar seminer_schedule">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="seminar_content">
                            <ul>
                              {
                              
                              seminarData.length > 0 ? 
                              seminarData.map(
                                (seminar, index)=>{
                                  const dateTime = new Date(seminar.seminar_meta.scheduleDate);
                                  // console.log(dateTime, 'Date time map');
                                  // console.log(seminar, 's data');
                                  // console.log(seminar.seminar_meta.scheduleDate, 'Original Date');

                                  const year = dateTime.getUTCFullYear();
                                  const day = dateTime.getUTCDate();
                                  const month = dateTime.getUTCMonth() + 1;

                                  // console.log(dateTime.getUTCFullYear(),'Get Year');
                                  // console.log(dateTime.getUTCDate(),'Get day');
                                  // console.log(dateTime.getUTCMonth(),'Get Month');
                                  
                                  //if (currentDate < dateTime || (currentDate-(1 * 24 * 60 * 60 * 1000)) < dateTime) {
                                  if (currentDate < dateTime) {
                                    return <SeminarItem key={index} day={day} year={year} month={month} seminarData={seminar} />
                                  }
                                
                              })
                              : <p>No Seminar Found</p> }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{page.latestSeminarVideo.latestSeminarVideoId &&
        <section id="previous_seminer_video">
            <div className="container">
                <div className="prev_semi_video_heading">
                  <h2 dangerouslySetInnerHTML={{ __html: page.latestSeminarVideo.sectionHeading }} />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner_img">
                          {page.latestSeminarVideo.latestSeminarVideoThumb !=null &&
                            <img className="img-fluid w-100" src={page.latestSeminarVideo.latestSeminarVideoThumb.sourceUrl} alt="Seminar Video" />
                          }
                            <div className="banner_img_overly">
                                <div className="overly_icon">
                                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={page.latestSeminarVideo.latestSeminarVideoId} onClose={() => setOpen(false)} />
                                  <button className="modalvidwrap" onClick={()=> setOpen(true)} >
                                      <FontAwesomeIcon icon={faPlay} />
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}
        <CourseSlide 
          coursSlide={courseData} 
          secHeading={page.homeAdmissionSecHeading} 
          secDesc={page.homeAdmissionSecDesc} 
          noBg />
        </Layout>
        </React.Fragment>
        
    )
}


export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "free-seminar"}}) {
      nodes {
        title
        content
        pageMeta {
          metaTitle
          metaDescription
        }
        homeAdmissionSecHeading
        homeAdmissionSecDesc
        latestSeminarVideo {
          sectionHeading
          latestSeminarVideoId
          latestSeminarVideoThumb {
            sourceUrl
          }
        }
      }
    }
    allWpCourseCategory {
      nodes {
        name
        slug
        link
        termTaxonomyId
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
        courses {
          nodes {
            id
            title
            excerpt
            slug
            courseCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            course_options {
              courseFee
              discountFee
              studentsIn
              reviewsCount
            }
          }
        }
      }
    }
    allWpSeminar(sort: {order: ASC, fields: seminar_meta___scheduleDate}) {
        nodes {
          title
          seminar_meta {
            scheduleDate
            course {
              ... on WpCourse {
                title
                databaseId
              }
            }
            venueOthers
            venue
            seminarTime {
              timeH
              timeS
              timeSlot
            }
          }
        }
      }
  }
`
