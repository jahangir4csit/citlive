import React,{Fragment, useEffect, useState} from 'react'
import Slider from "react-slick";
import { graphql, Link } from "gatsby"; 
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../components/layout"
import StudentFeedback from "../components/homepage/studentFeedback"
import SuccessStorySlider from '../components/successCase/courseSuccess'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import Seo from "../components/seo"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentProjects from '../components/courses/studentProjects'

import shape1 from '../images/course-landing/Pg_banner_shape1.png'
import shape2 from '../images/course-landing/Pg_banner_shape2.png'
import shape3 from '../images/course-landing/Pg_banner_shape3.png'
import shape4 from '../images/course-landing/Pg_banner_shape4.png'

import apiFetch from '@wordpress/api-fetch';

export default function SingleCourse({data}){

  const WPApi = 'https://app.creativeitinstitute.com/wp-json/wp/v2';

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const post = data.allWpCourse.nodes[0];
    const postId = post.databaseId
    const seo = post.pageMeta;
    const reviewsData = data.allWp.nodes[0];
    const projects = post.courseProjects;

    const [isOpen, setOpen] = useState(false);

    const [scroll, setScroll] = useState(false);

    // get options data from wp
    const [getDetails, setDetails] = useState([]);
    // get software 
    const [getSoftData, setSoftData] = useState([]);
    // get forwhome 
    const [getForWhome, setForWhome] = useState([]);
    // get jobmarket 
    const [getJobMarket, setJobMarket] = useState([]);
    // get job positions 
    const [getPosition, setPosition] = useState([]);
    // get job facility 
    const [getFacilities, setFacilities] = useState([]);
    // get success case 
    const [getSuccessCase, setSuccessCase] = useState([]);
    
    //console.log(getDetails, 'Course Details');
    //console.log(getSuccessCase, 'get case');

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 850);
        });
      }, []);

      

    useEffect(() => {

      // GET
      apiFetch( { path: `${WPApi}/courses/${postId}` } ).then( ( coursedetails ) => {
        setDetails(coursedetails);
        
        //get software data
        const sofData = Promise.all(
          coursedetails.software_for_course ?
          coursedetails.software_for_course.map(async (itemId) => await (await fetch(`${WPApi}/citoptions/${itemId}`)).json())
          :  setSoftData(0)
        )
        .then((values) => {
          setSoftData(values);
        })
        .catch(err => console.error(err));

        //get forwhome data
        const forWhomeData = Promise.all(
          coursedetails.course_for_whome ?
          coursedetails.course_for_whome.map(async (itemId) => await (await fetch(`${WPApi}/citoptions/${itemId}`)).json())
          : setForWhome(0)
        )
        .then((values) => {
          setForWhome(values);
        })
        .catch(err => console.error(err));

        //get Marketplace data
        const marketPlaces = Promise.all(
          coursedetails.job_market ?
          coursedetails.job_market.map(async (itemId) => await (await fetch(`${WPApi}/citoptions/${itemId}`)).json())
          : setJobMarket(0)
        )
        .then((values) => {
          setJobMarket(values);
        })
        .catch(err => console.error(err));

        //get position data
        const positions = Promise.all(
          coursedetails.job_position ?
          coursedetails.job_position.map(async (itemId) => await (await fetch(`${WPApi}/citoptions/${itemId}`)).json())
          :  setPosition(0)
        )
        .then((values) => {
          setPosition(values);
        })
        .catch(err => console.error(err));

        //get position data
        const facilities = Promise.all(
          coursedetails.course_facilities ?
          coursedetails.course_facilities.map(async (itemId) => await (await fetch(`${WPApi}/citoptions/${itemId}`)).json())
          :  setFacilities(0)
        )
        .then((values) => {
          setFacilities(values);
        })
        .catch(err => console.error(err));

        //get success case data
        const successCase = Promise.all(
          coursedetails.success_case_link ? 
          coursedetails.success_case_link.map(async (itemId) => await (await fetch(`${WPApi}/successcase/${itemId}`)).json())
          : setSuccessCase(0)
        )
        .then((values) => {
          setSuccessCase(values);
        })
        .catch(err => console.error(err));


      } );

    }, [])


    const settingsProjectsSlider = {
      className: "pgp_slider",
      autoplay:true,
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      dots:true,
      infinite: true,
      speed: 500,
    };

    return(
        <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />

          <section id="profe_graphic_banner">
            <div class="pink_shape">
                <img class="img-fluid" src={shape2} alt="pink color victor shape" />
            </div>
            <div class="white_dots">
                <img class="img-fluid" src={shape4} alt="white color dots victor" />
            </div>
            <div class="yellow_shape">
                <img class="img-fluid" src={shape1} alt="Yellow color victor shape" />
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
                            <div className="course_desc_article" dangerouslySetInnerHTML={{ __html: post.content }} />
                            }
                            <div class="pg_banner_btn">
                                <Link to="/contact-us/">ভর্তি</Link>
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
                            {/* <div class="countdown_sm_device">
                                <p>৩০% ছাড়ের <span id="day"></span><span id="hour"></span><span id="min"></span> বাকি!</p>
                            </div> */}

                        </div>
                    </div>
                    <div class="col-lg-7 pg_banner_img_col">
                        <div class="pg_banner_img position-relative">
                            {post.course_options.courseVideoThumbnail !=null ?
                            <Fragment>
                              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={post.course_options.courseVideoUrl !== null ? post.course_options.courseVideoUrl : '1PDg90odyVY'} onClose={() => setOpen(false)} />
                              <img class="img-fluid w-100" onClick={()=> setOpen(true)}
                              src={post.course_options.courseVideoThumbnail.sourceUrl} 
                              alt={post.course_options.courseVideoThumbnail.altText ? post.course_options.courseVideoThumbnail.altText : 'Creative IT Institute'} />
                              <div class="overly_icon">
                                  <button className="modalvidwrap">
                                      <FontAwesomeIcon icon={faPlay} />
                                  </button>
                              </div>
                            </Fragment>
                            : <img class="img-fluid w-100" 
                            src={post.featuredImage.node.sourceUrl} 
                            alt={post.featuredImage.node.altText ? post.featuredImage.node.altText : 'Creative IT Institute'} />
                            }
                        </div>
                        <div class="yellow_dots_right"><img src={shape3} alt="Yellow color dots" /></div>
                        <div class="yellow_dot_left"><img src={shape3} alt="Yellow color dots" /></div>
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
                            
                          <SuccessStorySlider sdata={getSuccessCase} />
                            <div class="pg_wait">
                                <h3>ভর্তি চলছে!</h3>
                                <p>অফলাইন (সরাসরি ইন্সটিটিউটে) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই। </p>

                                {post.course_options.courseFee != null ?
                                <div class="join_offline">
                                    <h4>কোর্স ফী (অফলাইন)</h4>
                                    <p>৳ {post.course_options.courseFee} টাকা</p>
                                    <Link to="/contact-us">Enroll Now</Link>
                                </div>
                                : ''}

                                {post.course_options.courseFeeOnline != null ?
                                <div class="join_offline">
                                    <h4>কোর্স ফী (অনলাইন)</h4>
                                    <p>৳ {post.course_options.courseFeeOnline} টাকা</p>
                                    <Link to="/contact-us">Enroll Now</Link>
                                </div>
                                : ''}

                                <div class="wait_btn text-center">
                                  <Link to="/free-seminar">ফ্রি সেমিনার</Link>
                                </div>
                            </div>
                        </div>
                        {post.crmModuleEntry.length > 0 &&
                        <div class="pgc_curriculum_wrap">
                            <Tab.Container id="left-tabs-example" defaultActiveKey={post.crmModuleEntry[0].crm_module_entry_title.split(' ').join('-')}>
                                <div class="pgc_curriculum_header d-flex align-items-center justify-content-between">
                                    <h3>কোর্স কারিকুলাম</h3>
                                    <Nav variant="pills" defaultActiveKey={post.crmModuleEntry[0].crm_module_entry_title.split(' ').join('-')}>
                                        {post.crmModuleEntry.length > 1 && 
                                        post.crmModuleEntry.map(
                                            modulesNav =>
                                        <Nav.Item className='navbar_btn'>
                                            <Nav.Link eventKey={modulesNav.crm_module_entry_title.split(' ').join('-')} className=''>{modulesNav.crm_module_entry_title}</Nav.Link>
                                        </Nav.Item>
                                        )}
                                    </Nav>
                                </div>
                                <Tab.Content>
                                    {post.crmModuleEntry.map(
                                        moduleContent=>
                                    <Tab.Pane className={"pgc_curriculum" + (moduleContent.crm_module_meta.length > 1 ? ' pgc_curriculum_child' : '')} eventKey={moduleContent.crm_module_entry_title.split(' ').join('-')}>
                                        <ul>
                                            {moduleContent.crm_module_meta.map(
                                                module=>
                                            <li>
                                                {(moduleContent.crm_module_meta.length > 1 && module.crm_module_opt_title) && <h4>{module.crm_module_opt_title} <span>{module.crm_module_opt_duration}</span></h4>} 
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
                        {getSoftData != null && getSoftData.length > 0 &&
                        getSoftData[0].title.rendered !== 'Empty' ? 
                        <div class="pgc_software">
                            <h3>যেসব সফটওয়্যার শেখানো হয়</h3>
                            <div class="row">
                            {getSoftData.map(
                                          softwareItem=>(

                                <div class="col-12 col-sm-6">
                                    <div class="pgc_item d-flex align-items-center">
                                        {softwareItem.better_featured_image !=null &&
                                        <div class="pgcs_icon">
                                          <img class="img-fluid w-100" 
                                          src={softwareItem.better_featured_image.source_url} 
                                          alt={softwareItem.better_featured_image.altText ? softwareItem.better_featured_image.altText : 'Creative IT Institute'} />
                                        </div>
                                        }
                                        {softwareItem.title !=null &&
                                        <div class="pgcs_text">
                                          <p>{softwareItem.title.rendered}</p>
                                        </div>
                                        }
                                    </div>
                                </div>

                                  )
                                )}

                            </div>
                        </div>
                        : '' }
                        {getForWhome !=null && getForWhome.length > 0 &&
                        getForWhome[0].title.rendered !== 'Empty' ?
                        <div class="pgc_for_whom">
                            <h3>এই কোর্স যাদের জন্য</h3>
                            <div class="row">

                            {getForWhome.map(
                                          courseforWItem=>(

                                <div class="col-6">
                                    <div class="pgcf_whom_item">
                                        <div class="pgcf_whom_item_icon">
                                            {courseforWItem.better_featured_image !=null && 
                                            <img class="img-fluid" 
                                            src={courseforWItem.better_featured_image.source_url} 
                                            alt={courseforWItem.better_featured_image.altText ? courseforWItem.better_featured_image.altText : 'Creative IT Institute'} />
                                            }
                                        </div>
                                        {courseforWItem.title !=null &&
                                        <div class="pgcf_whom_item_text">
                                            <p>{courseforWItem.title.rendered}</p>
                                        </div>
                                        }
                                    </div>
                                </div>
                                )
                                )}
                                
                            </div>
                        </div>
                        : '' }
                        {getJobMarket !=null && getJobMarket.length > 0 &&
                        getJobMarket[0].title.rendered !== 'Empty' ?
                        <div class="pg_marketplace">
                            <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                            <div class="row">
                              
                            {getJobMarket.map(
                                          jobMarket=>(

                                <div class="col-sm-6">
                                    <div class="marketplace_item">
                                        <div class="icon">
                                            {jobMarket.better_featured_image !=null && 
                                            <img 
                                            src={jobMarket.better_featured_image.source_url} 
                                            alt={jobMarket.better_featured_image.altText ? jobMarket.better_featured_image.altText : 'Creative IT Institute'}/>
                                            }
                                        </div>
                                        {jobMarket.content !=null &&
                                        <div class="text">
                                            <div dangerouslySetInnerHTML={{ __html: jobMarket.content.rendered }} />
                                        </div>
                                        }
                                    </div>
                                </div>
                              )
                              )}


                            </div>
                        </div>
                        : '' }
                        {getPosition !=null && getPosition.length > 0 &&
                        getPosition[0].title.rendered !== 'Empty' ?
                        <div class="pg_job">
                            <h3> যে সকল পজিশনে জব করতে পারবেন </h3>
                            <div class="row g-0">

                            {getPosition.map(
                                          jobPosition=>(
                                              <>
                                            {jobPosition.title !=null && 
                                            <div class="col-12 col-sm-6">
                                                <div class="job_item">
                                                    <ul>
                                                        <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="#FF7E31" stroke-width="2"/></svg>{jobPosition.title.rendered}</li>
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
                        {getFacilities !=null && getFacilities.length > 0 &&
                        getFacilities[0].title.rendered !== 'Empty' ?
                        <div class="pgs_facilitice">
                            <h3>ক্রিয়েটিভ আইটির বিশেষ সেবা</h3>
                            <div class="row">

                            {getFacilities.map(
                                          courseFacility=>(
                                <div class="col-md-6">
                                    <div class="pg_more_facilities_item pg_more_facilities_item_1" style={{ 'backgroundColor': courseFacility.facilityBoxBg }}>
                                        {courseFacility.better_featured_image !=null && 
                                        <img 
                                        src={courseFacility.better_featured_image.source_url} 
                                        alt={courseFacility.better_featured_image.altText ? courseFacility.better_featured_image.altText : 'Creative IT Institute'} />
                                        }
                                        {courseFacility.title !=null && <h3>{courseFacility.title.rendered}</h3>}
                                        {courseFacility.content !=null &&
                                        <div dangerouslySetInnerHTML={{ __html: courseFacility.content.rendered }} />
                                        }
                                    </div>
                                </div>
                                )
                                )}

                            </div>
                        </div>
                        : '' }
                        
                        {projects.length > 0 ? 
                        <StudentProjects projectsData={projects} />
                        : ''}

                        <StudentFeedback 
                        secDesc="আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়। 
" 
data={reviewsData}
/>

                    </div>

                    <div id="sidebar" class="col-lg-5 d-none d-sm-block">
                        <SuccessStorySlider sdata={getSuccessCase} />

                        <div className={'pg_wait_wrap ' + (scroll ? "nav_sticky" : "")}>
                            <div className="pg_wait">
                                <h3>ভর্তি চলছে!</h3>
                                <p>অফলাইন (সরাসরি ইন্সটিটিউটে) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই। </p>
                                <div class="join_offline_main">
                                    {post.course_options.courseFee !=null ?
                                    <div class="join_offline">
                                        <h4>কোর্স ফী (অফলাইন)</h4>
                                        <p>৳ {post.course_options.courseFee} টাকা</p>
                                        <Link to="/contact-us">Enroll Now</Link>
                                    </div>
                                    : ''}
                                    {post.course_options.courseFeeOnline !=null ?
                                    <div class="join_offline">
                                        <h4>কোর্স ফী (অনলাইন)</h4>
                                        <p>৳ {post.course_options.courseFeeOnline} টাকা</p>
                                        <Link to="/contact-us">Enroll Now</Link>
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
        databaseId
        content
        pageMeta {
          metaTitle
          metaDescription
        }
        featuredImage {
          node {
            sourceUrl
            altText
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
            altText
          }
          
        }
        courseProjects {
          video_id
          video_thumb
          gallery {
            sourceUrl
            altText
          }
        }
        studentProjects {
            url
          }

      }
    }
    allWp {
        nodes {
          crbThemeOptions {
            citReviewsFacebook
            citReviewsGoogle
            crbFacebookReviews {
              crb_fb_review_url
            }
            crbGooogleReviews {
              crb_goo_review_url
            }
          }
        }
    }
  }
`

