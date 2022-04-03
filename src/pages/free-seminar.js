import { graphql, Link } from "gatsby"
import React,{useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import CourseSlide from "../components/courses/CoursesSlide"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'

export default function FreeSeminar({data}){

    if (typeof window === 'undefined') {
      global.window = {}
    }
    const page = data.allWpPage.nodes[0];
    const courseData = data.allWpCourseCategory.nodes;
    const seminarData = data.allWpSeminar.nodes;
    const [isOpen, setOpen] = useState(false);
    
    return(
        <React.Fragment>
        <Layout>
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar_btn text-center d-md-none">
                            <a href="#"><StaticImage src="../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i class="fa fa-angle-down ps-2"></i></a>
                        </div>

                        <div class="facilities_heading ">
                          <h2 dangerouslySetInnerHTML={{ __html: page.title }} />
                          <div dangerouslySetInnerHTML={{ __html: page.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="seminar">
            <div class="container seminar seminer_schedule">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="seminar_content">
                            <ul>
                              {seminarData.length > 0 ? 
                              seminarData.map(
                                seminar=>
                                <li>
                                  <div class="date">{seminar.seminar_meta.seminarDate.day ? seminar.seminar_meta.seminarDate.day : ''} 
                                  <span>{seminar.seminar_meta.seminarDate.month ? seminar.seminar_meta.seminarDate.month : ''}, 
                                  {seminar.seminar_meta.seminarDate.year ? ' '+seminar.seminar_meta.seminarDate.year : ''}</span></div>
                                  <div class="text_main">
                                      <div class="text">
                                        <h4 dangerouslySetInnerHTML={{ __html: seminar.title }} />
                                        <p>{seminar.seminar_meta.venue ? seminar.seminar_meta.venue : seminar.seminar_meta.venueOthers}, 
                                        সময়ঃ {seminar.seminar_meta.seminarTime.timeSlot ? seminar.seminar_meta.seminarTime.timeSlot : ''} 
                                        {seminar.seminar_meta.seminarTime.timeH ? ' '+seminar.seminar_meta.seminarTime.timeH :''}:
                                        {seminar.seminar_meta.seminarTime.timeS ? seminar.seminar_meta.seminarTime.timeS :'00'} টা</p>
                                      </div>
                                      <div class="join_btn">
                                          <Link to="/register_for_free_seminar">জয়েন</Link>
                                      </div>
                                  </div>
                                </li>
                              )
                              : <p>No Seminar Found</p> }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="previous_seminer_video">
            <div class="container">
                <div class="prev_semi_video_heading">
                  <h2 dangerouslySetInnerHTML={{ __html: page.latestSeminarVideo.sectionHeading }} />
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner_img">
                          {page.latestSeminarVideo.latestSeminarVideoThumb !=null &&
                            <img class="img-fluid w-100" src={page.latestSeminarVideo.latestSeminarVideoThumb.sourceUrl} alt="Seminar Video" />
                          }
                            <div class="banner_img_overly">
                                <div class="overly_icon">
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
        <CourseSlide coursSlide={courseData} />
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
            }
          }
        }
      }
    }
    allWpSeminar {
        nodes {
          title
          seminar_meta {
            course
            venueOthers
            venue
            seminarDate {
              day
              month
              year
            }
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