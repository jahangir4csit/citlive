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

    console.log(currentDate, 'c date');
    
    return(
        <React.Fragment>
        <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar_btn text-center d-md-none">
                            <Link href="/our-courses">
                              <img src={BookButton} alt="book icon" />ব্রাউজ কোর্স 
                              <i class="fa fa-angle-down ps-2"></i>
                            </Link>
                        </div>

                        <div class="facilities_heading ">
                          <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
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
                              {
                              
                              seminarData.length > 0 ? 
                              seminarData.map(
                                (seminar)=>{
                                  const dateTime = new Date(seminar.seminar_meta.scheduleDate);
                                  // console.log(dateTime, 'Date time map');
                                  // console.log(seminar, 's data');
                                  // console.log(seminar.seminar_meta.scheduleDate, 'Original Date');

                                  const year = dateTime.getUTCFullYear();
                                  const day = dateTime.getUTCDate() + 1;
                                  const month = dateTime.getUTCMonth() + 1;

                                  // console.log(dateTime.getUTCFullYear(),'Get Year');
                                  // console.log(dateTime.getUTCDate() + 1,'Get day');
                                  // console.log(dateTime.getUTCMonth() + 1,'Get Month');
                                  
                                  if (currentDate < dateTime || (currentDate-(1 * 24 * 60 * 60 * 1000)) < dateTime) {
                                    return <SeminarItem day={day} year={year} month={month} seminarData={seminar} />
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
