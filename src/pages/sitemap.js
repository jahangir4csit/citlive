import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
//import PageDesc from '../components/pageDesc'

export default function SiteMap({data}) {

    return(
      <Layout>
        <Seo 
        title="Sitemap | Professional IT Training Institute in Bangladesh - Creative IT" 
        description="Study with us completing a certificate course in Graphic Design, Digital Marketing,
        Web Design &amp; Development, 3d Animation Training etc grow your business or start
        your career. Call 880 162 4666000" />
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="facilities_heading ">
                            <h1>সাইট ম্যাপ</h1>
                            {/* <div className="dtails" dangerouslySetInnerHTML={{ __html: pageData.content }} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="sitemap">
          <div class="container site_map">
            <div class="row">
              <div class="col-md-4 col-12 col-sm-6">
                <h5>ডিজাইন এন্ড মাল্টিমিডিয়া</h5>
                <ul>
                  <li><a href="/courses/professional-graphics-design/">প্রফেশনাল গ্রাফিক ডিজাইন</a></li>
                  <li><a href="/courses/ux-ui-design/">UX/UI ডিজাইন</a></li>
                  <li><a href="/courses/motion-graphics/">মোশন গ্রাফিক্স</a></li>
                  <li><a href="/courses/image-editing/">ইমেজ এডিটিং</a></li>
                  <li><a href="/courses/adobe-illustrator/">অ্যাডোবি ইলাস্ট্রেটর</a></li>
                </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>ওয়েব এন্ড সফটওয়্যার ডেভেলপমেন্ট</h5>
                  <ul>
                      <li><a href="/courses/web-design/">ওয়েব ডিজাইন</a></li>
                      <li><a href="/courses/professional-web-development/">ওয়েব ডেভেলপমেন্ট</a></li>
                      <li><a href="/courses/app-development/">অ্যাপ ডেভেলপমেন্ট</a></li>
                      <li><a href="/courses/mern-stack-development/">মার্ন স্ট্যাক ডেভেলপমেন্ট</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>ডিজিটাল মার্কেটিং</h5>
                  <ul>
                      <li><a href="/courses/digital-marketing/">ডিজিটাল মার্কেটিং</a></li>
                      <li><a href="/courses/affiliate-marketing/">এফিলিয়েট মার্কেটিং</a></li>
                      <li><a href="/courses/social-media-marketing/">সোশ্যাল মিডিয়া মার্কেটিং (SMM)</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>3D অ্যানিমেশন এন্ড ভিজ্যুয়ালাইজেশন</h5>
                  <ul>
                      <li><a href="/courses/professional-interior-exterior-design/">ইন্টেরিয়র ও এক্সটেরিয়র ডিজাইন</a></li>
                      <li><a href="/courses/professional-3d-animation">প্রফেশনাল 3D অ্যানিমেশন</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>নেটওয়ার্কিং টেকনোলজি</h5>
                  <ul>
                      <li><a href="/courses/comptia-network/">CompTIA নেটওয়ার্ক+</a></li>
                      <li><a href="/courses/ccna/">সিসকো সিসিএনএ</a></li>
                      <li><a href="/courses/mikrotik/">মাইক্রোটিক</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>ফিল্ম এন্ড মিডিয়া</h5>
                  <ul>
                      <li><a href="courses/video-editing/">প্রফেশনাল ভিডিও এডিটিং</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>রোবটিক্স এন্ড অটোমেশন</h5>
                  <ul>
                      <li><a href="#">Robotics</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>Others Training</h5>
                  <ul>
                      <li><a href="/courses/business-english/">বিজনেস ইংলিশ</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>Admission</h5>
                  <ul>
                      <li><a href="#">Get Admission</a></li>
                      <li><a href="#">Admission Procedure</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>Students</h5>
                  <ul>
                      <li><a href="/success-story/">সাফল্যের গল্প</a></li>
                      <li><a href="/student-feedback/">স্টুডেন্ট ফিডব্যাক</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5>Others</h5>
                  <ul>
                      <li><a href="/instructors-teachers/">মেন্টরস</a></li>
                      <li><a href="/our-facilities/">আমাদের সুবিধাদি</a></li>
                      <li><a href="/faq/">আপনার প্রশ্নসমূহ</a></li>
                  </ul>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5><a href="/job-placement/">জব প্লেসমেন্ট</a></h5>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5><a href="/gallery/">আমাদের গ্যালারী</a></h5>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5><a href="/contact-us/">যোগাযোগ</a></h5>
              </div>
              <div class="col-md-4 col-12 col-sm-6">
                  <h5><a href="/free-seminar/">ফ্রি সেমিনারের সময়সূচি</a></h5>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  
  }

  
