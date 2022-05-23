import { graphql } from "gatsby"
import * as React from "react"
import LazyLoad from 'react-lazyload';
import BlogSlider from "../components/blog/blogSlider"
import CounterUp from "../components/counterUp"
import AdmissionCourses from "../components/courses/admissionCourses"
import CourseSlide from "../components/courses/CoursesSlide"
import Facilities from "../components/facilities"
import FeaturedTextTwo from "../components/featuredTextTwo"
import HomeBanner from "../components/homepage/banner"
import CitInfoSlider from "../components/homepage/citInfoSlider"
import DepartmentSlider from "../components/homepage/department"
import FeaturedTextOne from "../components/homepage/featuredTextOne"
import Partners from "../components/homepage/partners"
import Seminar from "../components/homepage/seminar"
import StudentFeedback from "../components/homepage/studentFeedback"
import StudentSuccess from "../components/homepage/studentSuccess"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VirtualTour from "../components/virtualTour"

export default function HomePage({data}){

  const courseData = data.allWpCourseCategory.nodes;
  const homeData = data.allWpPage.nodes[0];
  const seminarUpcomming = data.allWpSeminar.nodes;
  const reviewsData = data.allWp.nodes[0];
  const vitrualTour = data.allWpSection.nodes[0];

  console.log(homeData.citPartners, 'CIT Partners');

  return(
    <Layout>
      <Seo 
      title="Professional IT Training Institute in Bangladesh - Creative IT"
      description="Develop your professional personal skills through Creative IT Institute We provide
    Graphic Design, Web Software, Digital Marketing, Networking, Film Media,
    Robotics Automation Training etc affordable price. Call +880 162 4666000"
       />
      <HomeBanner/>
      <DepartmentSlider 
      courseCatInfo={courseData} 
      />
      <CourseSlide 
      secHeading={homeData.homeFavouriteCourseSecHeading} 
      secDesc={homeData.homeFavouriteCourseSecDesc} 
      coursSlide={courseData}
      />
      <CitInfoSlider />
      <StudentSuccess 
      secHeading={homeData.homeSuccessSecHeading} 
      secDesc={homeData.homeSuccessSecDesc} 
      cases={homeData.homeSuccessCaseItems}
      />
      <Facilities 
      secHeading={homeData.homeFacilitySecHeading} 
      secDesc={homeData.homeFacilitySecDesc}
      facilities={homeData.homeSpecialFacilityItems}
      />
      <StudentFeedback 
      secHeading={homeData.homeCommentsSecHeading} 
      secDesc={homeData.homeCommentsSecDesc}
      data={reviewsData}
      />
      <LazyLoad once>
        <VirtualTour vData={vitrualTour} />
      </LazyLoad>
      <AdmissionCourses 
      secHeading={homeData.homeAdmissionSecHeading} 
      secDesc={homeData.homeAdmissionSecDesc}
      coursSlide={courseData} 
      button 
      />
      <Seminar 
      secHeading={homeData.homeSeminarSecHeading} 
      secDesc={homeData.homeSeminarSecDesc}
      secBanner={homeData.homeSeminarSecBanner}
      upcomming={seminarUpcomming}
      />
      <FeaturedTextOne />
      <FeaturedTextTwo aboutBtn />
      <CounterUp />
      <Partners 
      secHeading={homeData.homePartnersSecHeading} 
      secDesc={homeData.homePartnersSecDesc}
      partnersData={homeData.citPartners}
      />
      {/* <BlogSlider 
      secHeading={homeData.homeBlogSecHeading} 
      secDesc={homeData.homeBlogSecDesc}
      /> */}
    </Layout>
  )
}

export const query = graphql`
query CourseData
{
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
  allWpPage(filter: {slug: {eq: "home"}}) {
    nodes {
      homeSuccessSecHeading
      homeSuccessSecDesc
      homeSeminarSecHeading
      homeSeminarSecDesc
      homePartnersSecHeading
      homeSeminarSecBanner {
        altText
        sourceUrl
      }
      homePartnersSecDesc
      homeFavouriteExcludeCats
      homeFavouriteCourseSecHeading
      homeFavouriteCourseSecDesc
      homeFacilitySecHeading
      homeFacilitySecDesc
      homeCommentsSecHeading
      homeCommentsSecDesc
      homeBlogSecHeading
      homeBlogSecDesc
      homeAdmissionSecHeading
      homeAdmissionSecDesc
      homeAdmissionCoursesExcludeCats
      homeSuccessCaseItems {
        successStoryLink {
          successStoryLink
        }
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
      homeSpecialFacilityItems {
        title
        content
        facilityBoxBg
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
      citPartners {
        cit_partners_tab_title
        partner_logo {
          altText
          sourceUrl
        }
      }
    }
  }
  allWpSeminar(limit: 2, sort: {order: DESC, fields: date}) {
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
  allWpSection(filter: {isContentNode: {}, databaseId: {eq: 4367}}) {
    nodes {
      citVirtualTourIframe
      databaseId
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
  
}`
  