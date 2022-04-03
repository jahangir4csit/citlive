import React,{Fragment, useEffect, useState} from 'react'
import Slider from "react-slick";
import { graphql, Link } from "gatsby"; 
import { StaticImage } from "gatsby-plugin-image"
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../components/layout"
import StudentFeedback from "../components/homepage/studentFeedback"
import SuccessStorySlider from '../components/successCase/SuccessStorySlider'
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

export default function SingleCourse({data}){

    if (typeof window === 'undefined') {
        global.window = {}
    }


    const post = data.allWpCourse.nodes[0]
    console.log(post, 'Single Course')

    const [isOpen, setOpen] = useState(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 850);
        });
      }, []);

    const settingsProjectsSlider = {
      className: "pgp_slider",
      autoplay:false,
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      dots:true,
      infinite: true,
      speed: 500,
    };

    return(
        <Layout>
          <section id="profe_graphic_banner">
            <div class="pink_shape">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape2.png" alt="pink color victor shape" />
            </div>
            <div class="white_dots">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape4.png" alt="white color dots victor" />
            </div>
            <div class="yellow_shape">
                <iStaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape1.png" alt="Yellow color victor shape" />
            </div>


            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="pg_banner_text">
                            <h4>{post.course_options.courseSubTitle ? post.course_options.courseSubTitle : ''}</h4>
                            <h1>{post.title ? post.title : ''}<span class="d-block d-sm-none">স্কিল এর সাথে</span></h1>
                            <ul>
                                <li>কোর্সের মেয়াদ<span>{post.course_options.courseDuration !=null ? post.course_options.courseDuration : ''}</span></li>
                                <li>লেকচার<span>{post.course_options.totalLecture !=null ? post.course_options.totalLecture : ''}</span></li>
                                <li>প্রজেক্ট<span>{post.course_options.classPerWeek !=null ? post.course_options.classPerWeek : ''}</span></li>
                            </ul>
                            {post.content !=null &&
                            <div className='course_desc_article' dangerouslySetInnerHTML={{ __html: post.content }} />
                            }
                            <div class="pg_banner_btn">
                                <Link href="#">ভর্তি</Link>
                                <Link to="/free-seminar">ফ্রি সেমিনার</Link>
                            </div>
                            <div class="stars">
                                <p>
                                    {post.course_options.reviewsCount &&
                                    <Fragment>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    {post.course_options.reviewsCount } রিভিউস 
                                    </Fragment>}
                                    {post.course_options.studentsIn &&
                                    <span>{post.course_options.studentsIn} স্টুডেন্ট</span>}
                                </p>
                            </div>
                            <div class="countdown_sm_device">
                                <p>৩০% ছাড়ের <span id="day"></span><span id="hour"></span><span id="min"></span> বাকি!</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-7 pg_banner_img_col">
                        <div class="pg_banner_img position-relative">
                            {post.course_options.courseVideoThumbnail !=null ?
                            <img class="img-fluid w-100" src={post.course_options.courseVideoThumbnail.sourceUrl} alt="image" />
                            : <img class="img-fluid w-100" src={post.featuredImage.node.sourceUrl} alt="image" />
                            }
                            <div class="overly_icon">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={post.course_options.courseVideoUrl !== null ? post.course_options.courseVideoUrl : '1PDg90odyVY'} onClose={() => setOpen(false)} />
                                <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </div>
                        <div class="yellow_dots_right"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                        <div class="yellow_dot_left"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                    </div>
                </div>
            </div>
          </section>

          <section id="pg_course_overviwe">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="course_overviwe_text">
                            <h2> কোর্স ওভারভিউ </h2>
                            {post.courseOverview !=null && 
                            <div className='course_overview_article' dangerouslySetInnerHTML={{ __html: post.courseOverview }} />
                            }
                            <div class="row">
                                {post.crvListItems.map(
                                    overviewListItem =>
                                    <div class="col-md-6">
                                        <ul>
                                            {overviewListItem.title != null &&
                                            <li>
                                                <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.5 8.99979L7.16667 10.6665L10.5 7.33313M15.1817 3.98646C12.5468 4.12639 9.96395 3.2153 8 1.45312C6.03606 3.2153 3.45325 4.12639 0.818337 3.98646C0.606281 4.80739 0.499314 5.65192 0.500003 6.49979C0.500003 11.159 3.68667 15.0748 8 16.1848C12.3133 15.0748 15.5 11.1598 15.5 6.49979C15.5 5.63146 15.3892 4.78979 15.1817 3.98646Z" stroke="#232222" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg></span>
                                                {overviewListItem.title}
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                )}
                                
                            </div> 
                        </div>

                        <div class="sm_device-show d-block d-sm-none">
                            
                            <SuccessStorySlider />
                            <div class="pg_wait">
                                <h3>ভর্তি চলছে!</h3>
                                <p>অফলাইন (সরাসরি ইন্সটিটিউটে) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই। </p>

                                {post.course_options.courseFee != null ?
                                <div class="join_offline">
                                    <h4>অফলাইন ব্যাচ</h4>
                                    <p>৳ {post.course_options.courseFee} টাকা মাত্র</p>
                                    <a href="#">ভর্তি</a>
                                </div>
                                : ''}

                                {post.course_options.courseFeeOnline != null ?
                                <div class="join_offline">
                                    <h4>অনলাইন ব্যাচ</h4>
                                    <p>৳ {post.course_options.courseFeeOnline} টাকা মাত্র</p>
                                    <a href="#">ভর্তি</a>
                                </div>
                                : ''}

                                <div class="wait_btn text-center">
                                    <a href="free-seminer-schedule.html">ফ্রি সেমিনার</a>
                                </div>
                            </div>
                        </div>
                        {post.crmModuleEntry.length > 0 &&
                        <div class="pgc_curriculum_wrap">
                            <Tab.Container id="left-tabs-example" defaultActiveKey={post.crmModuleEntry[0].crm_module_entry_title.split(' ').join('-')}>
                                <div class="pgc_curriculum_header d-flex align-items-center justify-content-between">
                                    <h3>কোর্স কারিকুলাম</h3>
                                    <Nav variant="pills" defaultActiveKey={post.crmModuleEntry[0].crm_module_entry_title.split(' ').join('-')}>
                                        {post.crmModuleEntry.length > 1 ? 
                                        post.crmModuleEntry.map(
                                            modulesNav =>
                                        <Nav.Item className='navbar_btn'>
                                            <Nav.Link eventKey={modulesNav.crm_module_entry_title.split(' ').join('-')} className=''>{modulesNav.crm_module_entry_title}</Nav.Link>
                                        </Nav.Item>
                                        ) : ''}
                                    </Nav>
                                </div>
                                <Tab.Content>
                                    {post.crmModuleEntry.map(
                                        moduleContent=>
                                    <Tab.Pane className='pgc_curriculum' eventKey={moduleContent.crm_module_entry_title.split(' ').join('-')}>
                                        <ul>
                                            {moduleContent.crm_module_meta.map(
                                                module=>
                                            <li>
                                                <h4>{module.crm_module_opt_title} <span>{module.crm_module_opt_duration}</span></h4>
                                                <div class="row">
                                                    {module.crm_module_items.map(
                                                        moduleItems=>
                                                    <div class="col-sm-6">
                                                        <div class="pgc_inner_text">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="1" y="1" width="10" height="10" stroke="#D4D4D4" stroke-width="2"/>
                                                                        </svg>
                                                                    </span>
                                                                    {moduleItems.title}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    )}
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                    </Tab.Pane>
                                    )}
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        }
                        {post.course_options.softwareForCourse != null && post.course_options.softwareForCourse.length > 0 ? 
                        <div class="pgc_software">
                            <h3>যেসব সফটওয়্যার শেখানো হয়</h3>
                            <div class="row">
                            {post.course_options.softwareForCourse.map(
                                          softwareItem=>(

                                <div class="col-6">
                                    <div class="pgc_item d-flex align-items-center">
                                        {softwareItem.featuredImage !=null &&
                                        <div class="pgcs_icon">
                                          <img class="img-fluid w-100" src={softwareItem.featuredImage.node.sourceUrl} alt="image" />
                                        </div>
                                        }
                                        {softwareItem.title !=null &&
                                        <div class="pgcs_text">
                                          <p>{softwareItem.title}</p>
                                        </div>
                                        }
                                    </div>
                                </div>

                                  )
                                )}

                            </div>
                        </div>
                        : '' }
                        {post.course_options.courseForWhome !=null && post.course_options.courseForWhome.length > 0 ?
                        <div class="pgc_for_whom">
                            <h3>এই কোর্স যাদের জন্য</h3>
                            <div class="row">

                            {post.course_options.courseForWhome.map(
                                          courseforWItem=>(

                                <div class="col-6">
                                    <div class="pgcf_whom_item">
                                        <div class="pgcf_whom_item_icon">
                                            {courseforWItem.featuredImage !=null && 
                                            <img class="img-fluid" src={courseforWItem.featuredImage.node.sourceUrl} alt={courseforWItem.title} />
                                            }
                                        </div>
                                        {courseforWItem.title !=null &&
                                        <div class="pgcf_whom_item_text">
                                            <p>{courseforWItem.title}</p>
                                        </div>
                                        }
                                    </div>
                                </div>
                                )
                                )}
                                
                            </div>
                        </div>
                        : '' }
                        {post.course_options.jobMarket !=null && post.course_options.jobMarket.length > 0 ?
                        <div class="pg_marketplace">
                            <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                            <div class="row">
                              
                            {post.course_options.jobMarket.map(
                                          jobMarket=>(

                                <div class="col-sm-6">
                                    <div class="marketplace_item">
                                        <div class="icon">
                                            {jobMarket.featuredImage !=null && 
                                            <img src={jobMarket.featuredImage.node.sourceUrl} alt={jobMarket.title}/>
                                            }
                                        </div>
                                        {jobMarket.content !=null &&
                                        <div class="text">
                                            <div dangerouslySetInnerHTML={{ __html: jobMarket.content }} />
                                        </div>
                                        }
                                    </div>
                                </div>
                              )
                              )}


                            </div>
                        </div>
                        : '' }
                        {post.course_options.jobPosition !=null && post.course_options.jobPosition.length > 0 ?
                        <div class="pg_job">
                            <h3> যে সকল পজিশনে জব করতে পারবেন </h3>
                            <div class="row g-0">

                            {post.course_options.jobPosition.map(
                                          jobPosition=>(
                                              <>
                                            {jobPosition.title !=null && 
                                            <div class="col-6">
                                                <div class="job_item">
                                                    <ul>
                                                        <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="#FF7E31" stroke-width="2"/></svg>{jobPosition.title}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            }
                                              </>
      
                                )
                                )}

                            </div>
                        </div>
                        : '' }
                        {post.course_options.courseFacilities !=null && post.course_options.courseFacilities.length > 0 ?
                        <div class="pgs_facilitice">
                            <h3>ক্রিয়েটিভ আইটির বিশেষ সেবা</h3>
                            <div class="row">

                            {post.course_options.courseFacilities.map(
                                          courseFacility=>(
                                <div class="col-md-6">
                                    <div class="pg_more_facilities_item pg_more_facilities_item_1" style={{ 'backgroundColor': courseFacility.facilityBoxBg }}>
                                        {courseFacility.featuredImage !=null && 
                                        <img src={courseFacility.featuredImage.node.sourceUrl} alt={courseFacility.title} />
                                        }
                                        {courseFacility.title !=null && <h3>{courseFacility.title}</h3>}
                                        {courseFacility.content !=null &&
                                        <div dangerouslySetInnerHTML={{ __html: courseFacility.content }} />
                                        }
                                    </div>
                                </div>
                                )
                                )}

                            </div>
                        </div>
                        : '' }
                        
                        {post.studentProjects !=null && post.studentProjects.length > 0 ? 
                        <div class="pgs_project">
                            <div class="row">
                                <h2>আমাদের শিক্ষার্থীদের কিছু প্রোজেক্ট</h2>
                                
                                <div class="col-12">
                                    <Slider {...settingsProjectsSlider}>
                                    {post.studentProjects.map(
                                        item=> (
                                            <div>
                                                {item.url !=null &&
                                                <div class="pgp_slide_item">
                                                    <img class="img-fluid w-100" src={item.url} alt="image" />
                                                </div>
                                                }
                                            </div>
                                        )
                                    )}

                                    </Slider>
                                </div>
                            </div>
                        </div>
                        : ''}

                        <StudentFeedback 
                        secDesc="আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়। 
" />

                    </div>

                    <div id="sidebar" class="col-lg-5 d-none d-sm-block">
                        <SuccessStorySlider sdata={post.courseSuccessCase.successCaseLink} />

                        <div className={'pg_wait_wrap ' + (scroll ? "nav_sticky" : "")}>
                            <div className="pg_wait">
                                <h3>ভর্তি চলছে!</h3>
                                <p>অফলাইন (সরাসরি ইন্সটিটিউটে) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই। </p>
                                <div class="join_offline_main">
                                    {post.course_options.courseFee !=null ?
                                    <div class="join_offline">
                                        <h4>অফলাইন ব্যাচ</h4>
                                        <p>৳ {post.course_options.courseFee} টাকা মাত্র</p>
                                        <a href="#">ভর্তি</a>
                                    </div>
                                    : ''}
                                    {post.course_options.courseFeeOnline !=null ?
                                    <div class="join_offline">
                                        <h4>অনলাইন ব্যাচ</h4>
                                        <p>৳ {post.course_options.courseFeeOnline} টাকা মাত্র</p>
                                        <a href="#">ভর্তি</a>
                                    </div>
                                    : ''}
                                </div>
                                <div class="wait_btn text-center">
                                    <Link to="/free-seminar">ফ্রি সেমিনার</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    allWpCourse(filter: { id: { eq: $id } }) {
      nodes {
        title
        slug
        uri
        id
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        courseOverview
        crvListItems {
            title
        }
        crmModuleEntry {
            crm_module_entry_title
            crm_module_meta {
              crm_module_opt_duration
              crm_module_opt_title
              crm_module_items {
                title
              }
            }
        }
        course_options {
          courseFee
          discountFee
          courseFeeOnline
          courseFeeOnlineDiscount
          studentsIn
          reviewsCount
          courseDuration
          classPerWeek
          admissionLink
          courseVideo
          courseSubTitle
          isAdmissionOpen
          isSeminar
          seminarLink
          totalLecture
          courseVideoUrl
          courseVideoThumbnail {
            sourceUrl
          }
          softwareForCourse {
            ... on WpCitoption {
              id
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          jobPosition {
            ... on WpCitoption {
              id
              title
            }
          }
          jobMarket {
            ... on WpCitoption {
              id
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          courseForWhome {
            ... on WpCitoption {
              title
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          courseFacilities {
            ... on WpCitoption {
              id
              title
              content
              facilityBoxBg
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        studentProjects {
            url
          }
          courseSuccessCase {
            successCaseLink {
              ... on WpSuccessStories {
                successStoryLink {
                  successStoryLink
                }
                featuredImage {
                    node {
                      sourceUrl
                    }
                }
              }
            }
        }
      }
    }
  }
`

